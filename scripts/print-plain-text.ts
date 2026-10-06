// Job bullets are copied verbatim from this output into LinkedIn and application forms.
import { toPlainText } from "../shared/document/plaintext";
import { documentArgument } from "./documents";

process.stdout.write(toPlainText(documentArgument()));
