import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";
import { CourseSchema } from "./course";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export const TeachingSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  title: SimpleLocalizedContentSchema,
  organization: z.string(),
  icon: z.string().optional(),
  course: CourseSchema.optional(),
  department: SimpleLocalizedContentSchema.optional(),
  supervisor: z.string().optional(),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: RichLocalizedContentSchema.optional(),
  achievements: z.array(RichLocalizedContentSchema).optional(),
  isCurrent: z.boolean().optional(),
});

export type Teaching = z.infer<typeof TeachingSchema>;