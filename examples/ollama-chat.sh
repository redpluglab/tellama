#!/usr/bin/env bash
set -euo pipefail

: "${TELLAMA_URL:?Set TELLAMA_URL to the address shown in Tellama Server}"
: "${TELLAMA_API_KEY:?Set TELLAMA_API_KEY to the one-time key from Tellama}"

MODEL=${TELLAMA_MODEL:-$(
  curl --fail --silent --show-error "$TELLAMA_URL/api/tags" \
    -H "Authorization: Bearer $TELLAMA_API_KEY" |
    python3 -c 'import json,sys; print(json.load(sys.stdin)["models"][0]["model"])'
)}
PAYLOAD=$(TELLAMA_MODEL="$MODEL" python3 -c \
  'import json,os; print(json.dumps({"model":os.environ["TELLAMA_MODEL"],"messages":[{"role":"user","content":"Hello from my computer"}]}))')

curl --fail --no-buffer --show-error "$TELLAMA_URL/api/chat" \
  -H "Authorization: Bearer $TELLAMA_API_KEY" \
  -H "Content-Type: application/json" \
  --data "$PAYLOAD"
