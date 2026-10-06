import { DOCUMENT_BUILDERS } from "../shared/document/build";
import type { DocumentKind, DocumentModel } from "../shared/document/model";

const DOCUMENT_KINDS = Object.keys(DOCUMENT_BUILDERS) as DocumentKind[];

export function documentArgument(): DocumentModel {
  const kind = DOCUMENT_KINDS.find((known) => known === process.argv[2]);
  if (!kind) {
    process.stderr.write(`Usage: ${process.argv[1]} <${DOCUMENT_KINDS.join("|")}>\n`);
    process.exit(1);
  }
  return DOCUMENT_BUILDERS[kind]();
}
