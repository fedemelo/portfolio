import { writeFileSync } from "node:fs";
import { DOCUMENT_BUILDERS } from "../shared/document/build";
import { documentKindArgument, jsonPath, toJson } from "./documents";

const kind = documentKindArgument();
writeFileSync(jsonPath(kind), toJson(DOCUMENT_BUILDERS[kind]()));
process.stderr.write(`Saved: ${jsonPath(kind)}\n`);
