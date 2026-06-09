import { z, defineCollection } from "astro:content";

import { glob } from "astro/loaders";

const productsCollection = defineCollection({
  // 2. Use the loader to point to your products folder
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),

  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string().optional(),
    price: z.number(),
    sku: z.string().optional(),
    age: z.string().optional(),
    category: z.string().optional(),
    brand: z.string(),
    // z.coerce.date() safely converts strings into Date objects
    publish_date: z.coerce.date().default(() => new Date()),
    image: z.array(image()),
    desc: z.string().optional(),
  }),
});

export const collections = {
  products: productsCollection,
};
