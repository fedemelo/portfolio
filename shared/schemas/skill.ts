import { z } from "zod";
import { HideableSchema } from "./hideable";
import { SimpleLocalizedContentSchema } from "./utils";

export const SkillSchema = z.object({
  ...HideableSchema.shape,
  category: SimpleLocalizedContentSchema,
  skills: z.array(z.string()),
});

export type Skill = z.infer<typeof SkillSchema>; 