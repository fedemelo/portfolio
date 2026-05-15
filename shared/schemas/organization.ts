import { z } from "zod";
import { SimpleLocalizedContentSchema } from "./utils";

export const OrganizationSchema = z.object({
  name: z.union([z.string(), SimpleLocalizedContentSchema]),
  icon: z.string().optional(),
  link: z.string().url().optional(),
});

export type Organization = z.infer<typeof OrganizationSchema>;

