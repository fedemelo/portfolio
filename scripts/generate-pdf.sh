#!/usr/bin/env bash
set -euo pipefail

APP="${1:-}"
case "$APP" in
  cv) OUT_NAME="Federico Melo Barrero - CV.pdf" ;;
  resume) OUT_NAME="Federico Melo Barrero - Resume.pdf" ;;
  *) echo "Usage: $0 [cv|resume]" >&2; exit 1 ;;
esac

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_PATH="$ROOT_DIR/$APP/$OUT_NAME"
LOG_FILE="$(mktemp)"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "$CHROME" ]; then
  CHROME="$(command -v google-chrome || command -v chromium || true)"
fi
if [ -z "$CHROME" ]; then
  echo "Could not find a Chrome/Chromium executable" >&2
  exit 1
fi

pnpm --filter "@fedemelo/$APP" exec vite > "$LOG_FILE" 2>&1 &
DEV_PID=$!

PORT=""
cleanup() {
  if [ -n "$PORT" ]; then
    lsof -ti:"$PORT" | xargs -r kill 2>/dev/null || true
  fi
  kill "$DEV_PID" 2>/dev/null || true
  rm -f "$LOG_FILE"
}
trap cleanup EXIT

for _ in $(seq 1 40); do
  PORT="$(grep -oE 'localhost:[0-9]+' "$LOG_FILE" | head -1 | cut -d: -f2 || true)"
  if [ -n "$PORT" ]; then
    break
  fi
  sleep 0.5
done

if [ -z "$PORT" ]; then
  echo "Dev server for $APP did not start:" >&2
  cat "$LOG_FILE" >&2
  exit 1
fi

for _ in $(seq 1 30); do
  if curl -s "http://localhost:$PORT" > /dev/null; then
    break
  fi
  sleep 0.3
done

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT_PATH" \
  --virtual-time-budget=5000 \
  "http://localhost:$PORT" 2>/dev/null

echo "Saved: $OUT_PATH"
