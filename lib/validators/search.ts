import { z } from "zod";

export const searchRequestSchema = z.object({
  city: z.string().min(1, "La ville est requise").max(100, "Ville trop longue"),
  sector: z
    .string()
    .min(1, "Le secteur est requis")
    .max(100, "Secteur trop long"),
  limit: z.coerce
    .number()
    .int()
    .min(1, "Minimum 1 prospect")
    .max(100, "Maximum 100 prospects")
    .default(25),
  withoutWebsiteOnly: z.coerce.boolean().default(false),
});

export type SearchRequestInput = z.infer<typeof searchRequestSchema>;
