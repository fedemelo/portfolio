import { z } from "zod";
import { CourseSchema } from "./course";
import { HideableSchema } from "./hideable";
import { SimpleLocalizedContentSchema } from "./utils";

export const RelevantCourseSchema = CourseSchema.pick({
  showInCV: true,
  showInResume: true,
  code: true,
  name: true,
  originalName: true,
  credits: true,
});

export const RelevantCourseworkSchema = z.object({
  ...HideableSchema.shape,
  area: SimpleLocalizedContentSchema,
  courses: z.array(RelevantCourseSchema),
});

export type RelevantCoursework = z.infer<typeof RelevantCourseworkSchema>;