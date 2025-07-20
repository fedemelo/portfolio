import { z } from "zod";
import { LocationSchema } from "./location";
import { HideableSchema } from "./hideable";
import { RichLocalizedContentSchema, SimpleLocalizedContentSchema } from "./utils";

export const AwardInstanceSchema = z.object({
  description: RichLocalizedContentSchema,
  date: z.date(),
});

export const AwardSchema = z.object({
  ...HideableSchema.shape,
  ...LocationSchema.shape,
  title: SimpleLocalizedContentSchema,
  description: RichLocalizedContentSchema,
  organization: z.string(),
  date: z.date().optional(),
  instances: z.array(AwardInstanceSchema).optional(),
});

export type Award = z.infer<typeof AwardSchema>;