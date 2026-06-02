// src/content/config.ts
import { defineCollection, z } from "astro:content";

const productsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.number(),
    sku: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  products: productsCollection,
};
