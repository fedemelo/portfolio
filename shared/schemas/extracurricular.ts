import { z } from "zod";
import { HideableSchema } from "./hideable";
import { RichLocalizedContentSchema } from "./utils";

export const ExtracurricularSchema = z.object({
  ...HideableSchema.shape,
  description: RichLocalizedContentSchema,
  events: z.array(RichLocalizedContentSchema),
});

export type Extracurricular = z.infer<typeof ExtracurricularSchema>;