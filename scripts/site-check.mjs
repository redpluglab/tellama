import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize, relative, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const HTML_FILES = ["index.html", "404.html", "guide/index.html", "privacy/index.html", "privacy/ko/index.html"];
const REQUIRED_FILES = [
  ...HTML_FILES,
  "assets/site.css",
  "assets/site.js",
  "site.webmanifest",
  "robots.txt",
  "sitemap.xml"
];
const EXTERNAL_PREFIXES = ["http://", "https://", "mailto:", "tel:", "data:"];
const errors = [];

function report(message) {
  errors.push(message);
}

for (const file of REQUIRED_FILES) {
  if (!existsSync(join(ROOT, file))) report(`Missing required file: ${file}`);
}

for (const file of HTML_FILES) {
  const absoluteFile = join(ROOT, file);
  if (!existsSync(absoluteFile)) continue;
  const html = readFileSync(absoluteFile, "utf8");

  if (!/<meta\s+name=["']viewport["']/i.test(html)) report(`${file}: missing viewport meta tag`);
  if (!/<main(?:\s|>)/i.test(html)) report(`${file}: missing main landmark`);
  if (!/<h1(?:\s|>)/i.test(html)) report(`${file}: missing h1`);

  const references = html.matchAll(/(?:href|src)=["']([^"']+)["']/gi);
  for (const match of references) {
    const reference = match[1].trim();
    if (!reference || reference.startsWith("#") || EXTERNAL_PREFIXES.some((prefix) => reference.startsWith(prefix))) continue;

    const cleanReference = reference.split(/[?#]/, 1)[0];
    const target = cleanReference.startsWith("/")
      ? join(ROOT, cleanReference.replace(/^\/tellama\/?/, ""))
      : resolve(dirname(absoluteFile), cleanReference);
    const normalizedTarget = normalize(target);
    if (!normalizedTarget.startsWith(ROOT)) {
      report(`${file}: local reference escapes site root: ${reference}`);
    } else if (!existsSync(normalizedTarget)) {
      report(`${file}: broken local reference: ${reference} -> ${relative(ROOT, normalizedTarget)}`);
    }
  }
}

const indexHtml = readFileSync(join(ROOT, "index.html"), "utf8");
const siteJs = readFileSync(join(ROOT, "assets/site.js"), "utf8");
const translationKeys = new Set(Array.from(indexHtml.matchAll(/data-i18n=["']([^"']+)["']/g), (match) => match[1]));
for (const key of translationKeys) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!new RegExp(`\\n\\s*${escapedKey}:`).test(siteJs)) report(`Missing English translation: ${key}`);
}

const privacyHtml = readFileSync(join(ROOT, "privacy/index.html"), "utf8");
for (const requiredPhrase of ["External API Models", "Web Research", "Model Downloads and App Updates", "Retention"]) {
  if (!privacyHtml.includes(requiredPhrase)) report(`English privacy policy missing section: ${requiredPhrase}`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Site check passed: ${HTML_FILES.length} HTML pages, ${translationKeys.size} localized strings.`);
}
