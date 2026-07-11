/** JavaScript SDK contract test. SPDX-License-Identifier: Apache-2.0 */
import assert from "node:assert/strict";
import { TellamaClient, TellamaError } from "../javascript/tellama.mjs";

const baseUrl = process.env.TELLAMA_TEST_URL || "http://127.0.0.1:18765";

assert.throws(
  () => new TellamaClient({ baseUrl, timeoutMs: 0 }),
  /timeoutMs must be a positive finite number/,
);

await assert.rejects(
  new TellamaClient({ baseUrl }).listModels(),
  (error) => error instanceof TellamaError && error.status === 401 && error.code === "AUTH_001",
);

const client = new TellamaClient({ baseUrl, apiKey: "test-key" });
const models = await client.listModels();
assert.equal(models[0].model, "test-model");

await assert.rejects(
  async () => {
    for await (const _chunk of client.ollamaChat({
      model: "missing",
      messages: [{ role: "user", content: "hi" }],
    })) { /* no-op */ }
  },
  (error) => error instanceof TellamaError && error.status === 404 && error.code === "MODEL_001",
);

let ollama = "";
for await (const chunk of client.ollamaChat({
  model: "test-model",
  messages: [{ role: "user", content: "hi" }],
})) ollama += chunk;
assert.equal(ollama, "hello world");

let openai = "";
for await (const chunk of client.openAIChat({
  model: "test-model",
  messages: [{ role: "user", content: "hi" }],
})) openai += chunk;
assert.equal(openai, "openai works");
console.log("javascript-sdk: ok");
