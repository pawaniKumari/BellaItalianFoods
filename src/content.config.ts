import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),

  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      slug: z.string().optional(),
      price: z.number(),
      sku: z.string().optional(),
      age: z.string().optional(),
      category: z.string().optional(),
      brand: z.string(),
      publish_date: z.coerce.date().default(() => new Date()),

      // 🌟 THE BULLETPROOF FIX 🌟
      // This accepts an array of images OR a single image,
      // automatically turning single images into an array!
      image: z.union([z.array(image()), image().transform((val) => [val])]),

      desc: z.string().optional(),
    }),
});

export const collections = {
  products: productsCollection,
};
