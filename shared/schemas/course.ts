import { z } from "zod";
import { HideableSchema } from "./hideable";
import { OrganizationSchema } from "./organization";
import { LocationSchema } from "./location";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export const CourseSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  code: z.string(),
  slug: z.string(),
  name: SimpleLocalizedContentSchema,
  originalName: z.string().optional(),
  organization: OrganizationSchema,
  department: SimpleLocalizedContentSchema.optional(),
  credits: z.number().optional(),
  description: RichLocalizedContentSchema.optional(),
  topics: z.array(z.string()).optional(),
  teachingIds: z.array(z.string()),
  websiteUrl: z.string().optional(),
  syllabusUrl: z.string().optional(),
  materialsUrl: z.string().optional(),
  hasPage: z.boolean().optional(),
});

export type Course = z.infer<typeof CourseSchema>;