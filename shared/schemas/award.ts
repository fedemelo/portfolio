import { z } from "zod";
import { LocationSchema } from "./location";
import { HideableSchema } from "./hideable";
import { OrganizationSchema } from "./organization";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export const AwardInstanceSchema = z.object({
  description: RichLocalizedContentSchema,
  date: z.date(),
  certificateUrl: z.string().optional(),
  images: z.array(z.string()).optional(),
});

export const AwardSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  title: SimpleLocalizedContentSchema,
  description: RichLocalizedContentSchema,
  organization: OrganizationSchema,
  date: z.date().optional(),
  instances: z.array(AwardInstanceSchema).optional(),
  certificateUrl: z.string().optional(),
  images: z.array(z.string()).optional(),
});

export type Award = z.infer<typeof AwardSchema>;