import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { HideableSchema } from "./hideable";

export const RichLocalizedContentSchema = z.object({
  ...HideableSchema.shape,
  en: z.object({
    full: z.string(),
    short: z.string().optional(),
  }),
  es: z.object({
    full: z.string(),
    short: z.string().optional(),
  }).optional(),
});

export const SimpleLocalizedContentSchema = z.object({
  en: z.string(),
  es: z.string().optional(),
});

export type RichLocalizedContent = z.infer<typeof RichLocalizedContentSchema>;
export type SimpleLocalizedContent = z.infer<typeof SimpleLocalizedContentSchema>;

export type Language = 'en' | 'es';
export type ContentType = 'full' | 'short';

export const ErrorSchema = z.object({
  error: z.string(),
  message: z.string(),
});

export const HealthCheckSchema = z.object({
  status: z.literal("ok"),
  timestamp: z.string(),
  uptime: z.number(),
});

export function zodToSwaggerSchema(schema: z.ZodType<any>) {
  return zodToJsonSchema(schema, {
    name: undefined,
    $refStrategy: "none",
  });
}

export function zodArrayToSwaggerSchema(schema: z.ZodType<any>) {
  return zodToJsonSchema(schema.array(), {
    name: undefined,
    $refStrategy: "none",
  });
}