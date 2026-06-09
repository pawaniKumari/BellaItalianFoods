import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),

  // Notice we removed the ({ image }) => part here
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string().optional(),
    price: z.number(),
    sku: z.string().optional(),
    age: z.string().optional(),
    category: z.string().optional(),
    brand: z.string(),
    publish_date: z.coerce.date().default(() => new Date()),

    // 🌟 THE FIX 🌟
    // We went back to using z.string() instead of the image() helper.
    // This allows multiple images, converts old single images into arrays,
    // AND stops Astro from crashing on the path formatting!
    image: z.union([z.array(z.string()), z.string().transform((val) => [val])]),

    desc: z.string().optional(),
  }),
});

export const collections = {
  products: productsCollection,
};
