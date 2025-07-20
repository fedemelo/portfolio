import { z } from "zod";
import { HideableSchema } from "./hideable";
import { RichLocalizedContentSchema } from "./utils";

export const ResearchInterestSchema = z.object({
  ...HideableSchema.shape,
  text: RichLocalizedContentSchema,
});

export type ResearchInterest = z.infer<typeof ResearchInterestSchema>;