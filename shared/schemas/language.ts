import { z } from "zod";
import { HideableSchema } from "./hideable";
import { SimpleLocalizedContentSchema } from "./utils";

export const CertificationSchema = z.object({
  ...HideableSchema.shape,
  name: SimpleLocalizedContentSchema,
  id: z.string(),
  grade: z.string().regex(/^\d+\/\d+$/),
  cefrLevel: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
  date: z.date(),
});

export const LanguageSchema = z.object({
  ...HideableSchema.shape,
  name: SimpleLocalizedContentSchema,
  proficiency: SimpleLocalizedContentSchema,
  certifications: z.array(CertificationSchema).optional(),
});

export type Language = z.infer<typeof LanguageSchema>;

