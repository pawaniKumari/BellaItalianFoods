// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const productsCollection = defineCollection({
  // Use the glob loader to find all markdown files in the products folder
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
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
