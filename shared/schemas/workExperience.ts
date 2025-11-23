import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";
import { OrganizationSchema } from "./organization";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export type WorkMode = z.infer<typeof WorkModeSchema>;
export const WorkModeSchema = z.enum(['remote', 'onsite', 'hybrid']);
export const EmploymentTypeSchema = z.enum(['full-time', 'part-time', 'contract', 'internship']);

export const WorkExperienceSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  title: SimpleLocalizedContentSchema,
  team: SimpleLocalizedContentSchema.optional(),
  squad: SimpleLocalizedContentSchema.optional(),
  organization: OrganizationSchema,
  startDate: z.date(),
  endDate: z.date().optional(),
  description: RichLocalizedContentSchema,
  achievements: z.array(RichLocalizedContentSchema).optional(),
  technologies: z.array(z.string()),
  workMode: WorkModeSchema,
  employmentType: EmploymentTypeSchema,
  isCurrent: z.boolean().optional(),
});

export type WorkExperience = z.infer<typeof WorkExperienceSchema>;