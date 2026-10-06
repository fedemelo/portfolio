// Fails when a committed document JSON no longer matches what shared/data
// produces, i.e. the data changed but the document was not rebuilt.
// Periods ending in "Present" carry a duration that grows each month, so this
// also fails once a committed document has gone a month without a rebuild.
import { existsSync, readFileSync } from "node:fs";
import { DOCUMENT_BUILDERS } from "../shared/document/build";
import { DOCUMENT_KINDS, jsonPath, toJson } from "./documents";

const stale = DOCUMENT_KINDS.filter((kind) => {
  const path = jsonPath(kind);
  return !existsSync(path) || readFileSync(path, "utf8") !== toJson(DOCUMENT_BUILDERS[kind]());
});

for (const kind of stale) process.stderr.write(`Stale: ${jsonPath(kind)}. Run \`make ${kind}\` and commit the result.\n`);
process.exit(stale.length > 0 ? 1 : 0);
