import { z } from "zod";

export const OrganizationSchema = z.object({
  name: z.string(),
  icon: z.string().optional(),
  link: z.string().url().optional(),
});

export type Organization = z.infer<typeof OrganizationSchema>;

