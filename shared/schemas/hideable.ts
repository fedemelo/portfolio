import { z } from "zod";

export const HideableSchema = z.object({
  showInCV: z.boolean().optional(),
  showInResume: z.boolean().optional(),
});