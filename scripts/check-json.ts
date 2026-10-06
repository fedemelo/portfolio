// Durations of periods ending in "Present" grow monthly, so this also fails
// a month after the last rebuild even without a data change.
import { existsSync, readFileSync } from "node:fs";
import { DOCUMENT_BUILDERS } from "../shared/document/build";
import { DOCUMENT_KINDS, jsonPath, toJson } from "./documents";

const stale = DOCUMENT_KINDS.filter((kind) => {
  const path = jsonPath(kind);
  return !existsSync(path) || readFileSync(path, "utf8") !== toJson(DOCUMENT_BUILDERS[kind]());
});

for (const kind of stale) process.stderr.write(`Stale: ${jsonPath(kind)}. Run \`make ${kind}\` and commit the result.\n`);
process.exit(stale.length > 0 ? 1 : 0);
