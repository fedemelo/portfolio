import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";
import { CourseSchema } from "./course";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export const EducationSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  degree: SimpleLocalizedContentSchema,
  organization: z.string(),
  startDate: z.date().optional(),
  graduationDate: z.date().optional(),
  trueEndDate: z.date().optional(),
  honors: SimpleLocalizedContentSchema.optional(),
  gpa: z.string().regex(/^\d+\.\d+\/\d+\.\d+$/).optional(),
  details: z.array(RichLocalizedContentSchema).optional(),
  course: CourseSchema.optional(),
  supervisor: z.string().optional(),
});

export type Education = z.infer<typeof EducationSchema>;
