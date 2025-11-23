import { z } from "zod";
import { HideableSchema } from "./hideable";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export const TeachingSchema = z.object({
  ...HideableSchema.shape,
  id: z.string(),
  title: SimpleLocalizedContentSchema,
  courseCode: z.string(),
  period: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: RichLocalizedContentSchema.optional(),
  achievements: z.array(RichLocalizedContentSchema).optional(),
  supervisor: z.string().optional(),
  isCurrent: z.boolean().optional(),
});

export type Teaching = z.infer<typeof TeachingSchema>;