import { z } from "zod";
import { HideableSchema } from "./hideable";
import { LocationSchema } from "./location";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export const AuthorSchema = z.object({
  name: z.string(),
  isUser: z.boolean().optional(),
});

export const PublicationSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  title: SimpleLocalizedContentSchema,
  authors: z.array(AuthorSchema),
  year: z.number(),
  description: RichLocalizedContentSchema,
  institution: z.string(),
  url: z.string().optional(),
  linkText: SimpleLocalizedContentSchema.optional(),
});

export type Publication = z.infer<typeof PublicationSchema>; 