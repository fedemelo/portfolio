import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";
import { OrganizationSchema } from "./organization";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export const TeachingTypeSchema = z.enum(["professional", "undergraduate"]);
export type TeachingType = z.infer<typeof TeachingTypeSchema>;

export const TeachingSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  id: z.string(),
  type: TeachingTypeSchema,
  title: SimpleLocalizedContentSchema,
  organization: OrganizationSchema,
  courseCode: z.string(),
  period: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: RichLocalizedContentSchema.optional(),
  achievements: z.array(RichLocalizedContentSchema).optional(),
  supervisor: z.string().optional(),
  isCurrent: z.boolean().optional(),
  evaluationPdfUrl: z.string().url().optional(),
});

export type Teaching = z.infer<typeof TeachingSchema>;