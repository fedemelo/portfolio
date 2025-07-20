import { z } from "zod";
import { CourseSchema } from "./course";
import { HideableSchema } from "./hideable";
import { SimpleLocalizedContentSchema } from "./utils";

export const RelevantCourseworkSchema = z.object({
  ...HideableSchema.shape,
  area: SimpleLocalizedContentSchema,
  courses: z.array(CourseSchema),
});

export type RelevantCoursework = z.infer<typeof RelevantCourseworkSchema>;