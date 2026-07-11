#!/usr/bin/env bash
set -euo pipefail

ROOT=$(cd "$(dirname "$0")/.." && pwd)
PORT=${TELLAMA_TEST_PORT:-18765}
export TELLAMA_TEST_PORT="$PORT"
export TELLAMA_TEST_URL="http://127.0.0.1:$PORT"

python3 "$ROOT/tests/mock_server.py" &
SERVER_PID=$!
cleanup() { kill "$SERVER_PID" 2>/dev/null || true; }
trap cleanup EXIT

for _ in {1..50}; do
  if curl --silent --max-time 1 "$TELLAMA_TEST_URL/api/tags" >/dev/null; then
    break
  fi
  sleep 0.1
done

python3 "$ROOT/tests/test_python.py"
node "$ROOT/tests/test_javascript.mjs"
