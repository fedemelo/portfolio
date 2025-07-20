import { z } from "zod";
import { HideableSchema } from "./hideable";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export const CourseSchema = z.object({
  ...HideableSchema.shape,
  name: SimpleLocalizedContentSchema,
  originalName: z.string().optional(),
  code: z.string(),
  credits: z.number().optional(),
  description: RichLocalizedContentSchema.optional(),
  link: z.string().optional(),
});