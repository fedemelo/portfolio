import { DOCUMENT_BUILDERS } from "../shared/document/build";
import type { DocumentKind, DocumentModel } from "../shared/document/model";

export const DOCUMENT_KINDS = Object.keys(DOCUMENT_BUILDERS) as DocumentKind[];

export function jsonPath(kind: DocumentKind): string {
  return `${kind}/${kind}.json`;
}

export function toJson(document: DocumentModel): string {
  return JSON.stringify(document, null, 2) + "\n";
}

export function documentKindArgument(): DocumentKind {
  const kind = process.argv[2];
  if (!DOCUMENT_KINDS.includes(kind as DocumentKind)) {
    process.stderr.write(`Usage: ${process.argv[1]} <${DOCUMENT_KINDS.join("|")}> [args]\n`);
    process.exit(1);
  }
  return kind as DocumentKind;
}
