/** Minimal Tellama JavaScript example. SPDX-License-Identifier: Apache-2.0 */
import { TellamaClient } from "./tellama.mjs";

const { TELLAMA_URL: baseUrl, TELLAMA_API_KEY: apiKey } = process.env;
if (!baseUrl || !apiKey) {
  throw new Error("Set TELLAMA_URL and TELLAMA_API_KEY before running this example");
}

const client = new TellamaClient({ baseUrl, apiKey });
const models = await client.listModels();
if (!models.length) throw new Error("No model is installed in Tellama");

for await (const text of client.ollamaChat({
  model: models[0].model,
  messages: [{ role: "user", content: "Hello from JavaScript" }],
})) {
  process.stdout.write(text);
}
process.stdout.write("\n");
