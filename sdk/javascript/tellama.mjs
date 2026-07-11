/** Dependency-free Tellama client. SPDX-License-Identifier: Apache-2.0 */
export class TellamaError extends Error {
  constructor(message, { status = null, code = null } = {}) {
    super(message);
    this.name = "TellamaError";
    this.status = status;
    this.code = code;
  }
}

export class TellamaClient {
  constructor({ baseUrl, apiKey = null, timeoutMs = 180_000 }) {
    const parsed = new URL(baseUrl);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new TypeError("baseUrl must use http or https");
    }
    if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
      throw new TypeError("timeoutMs must be a positive finite number");
    }
    this.baseUrl = baseUrl.replace(/\/+$/, "");
    this.apiKey = apiKey?.trim() || null;
    this.timeoutMs = timeoutMs;
  }

  async listModels() {
    const response = await this.#request("/api/tags");
    const payload = await response.json();
    if (!Array.isArray(payload.models)) {
      throw new TellamaError("The server returned an invalid model list");
    }
    return payload.models;
  }

  async *ollamaChat({ model, messages }) {
    const response = await this.#request("/api/chat", {
      method: "POST",
      body: JSON.stringify({ model, messages, stream: true }),
    });
    for await (const line of responseLines(response, this.timeoutMs)) {
      if (!line) continue;
      const payload = JSON.parse(line);
      const content = payload.message?.content || payload.response || "";
      if (content) yield content;
      if (payload.done === true) return;
    }
  }

  async *openAIChat({ model, messages }) {
    const response = await this.#request("/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({ model, messages, stream: true }),
    });
    for await (const line of responseLines(response, this.timeoutMs)) {
      if (!line.startsWith("data:")) continue;
      const data = line.slice(5).trim();
      if (data === "[DONE]") return;
      const payload = JSON.parse(data);
      const content = payload.choices?.[0]?.delta?.content || "";
      if (content) yield content;
    }
  }

  async #request(path, options = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    const headers = { Accept: "application/json", ...(options.headers || {}) };
    if (options.body) headers["Content-Type"] = "application/json";
    if (this.apiKey) headers.Authorization = `Bearer ${this.apiKey}`;
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        ...options,
        headers,
        signal: controller.signal,
      });
      if (!response.ok) {
        let payload = {};
        try {
          payload = await response.json();
        } catch {
          // Keep the public error free of response internals.
        }
        const body = payload.error && typeof payload.error === "object" ? payload.error : payload;
        throw new TellamaError(
          body.message || "Tellama request failed",
          { status: response.status, code: body.code || null },
        );
      }
      return response;
    } catch (error) {
      if (error instanceof TellamaError) throw error;
      const message = error?.name === "AbortError"
        ? "Tellama request timed out"
        : "Could not reach Tellama";
      throw new TellamaError(message);
    } finally {
      clearTimeout(timer);
    }
  }
}

async function* responseLines(response, timeoutMs) {
  if (!response.body) throw new TellamaError("Tellama returned an empty response");
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  try {
    while (true) {
      const { value, done } = await readWithTimeout(reader, timeoutMs);
      buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() || "";
      for (const line of lines) yield line;
      if (done) break;
    }
    if (buffer) yield buffer;
  } finally {
    reader.releaseLock();
  }
}

async function readWithTimeout(reader, timeoutMs) {
  let timer;
  try {
    return await Promise.race([
      reader.read(),
      new Promise((_, reject) => {
        timer = setTimeout(
          () => reject(new TellamaError("Tellama stream timed out")),
          timeoutMs,
        );
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
}
