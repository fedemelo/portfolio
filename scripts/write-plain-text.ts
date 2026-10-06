// Prints a document as plain text and saves it to the given path, so job
// bullets can be copied verbatim (see .claude/skills/sync-linkedin-experience).
import { writeFileSync } from "node:fs";
import { DOCUMENT_BUILDERS } from "../shared/document/build";
import { toPlainText } from "../shared/document/plaintext";
import { documentKindArgument } from "./documents";

const kind = documentKindArgument();
const outPath = process.argv[3];
const text = toPlainText(DOCUMENT_BUILDERS[kind]());
writeFileSync(outPath, text);
process.stdout.write(text);
process.stderr.write(`Saved: ${outPath}\n`);
