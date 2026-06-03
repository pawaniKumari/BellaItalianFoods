import { z, defineCollection } from "astro:content";

const productsCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    price: z.number(),
    sku: z.string(),
    age: z.string(),
    category: z.string(),
    brand: z.string(),
    image: z.string().optional(),
    // Note: If you use the markdown body for the description instead of the 'desc' frontmatter field,
    // you don't necessarily need to define 'desc' here. But if you keep it as frontmatter, use this:
    desc: z.string(),
  }),
});

export const collections = {
  products: productsCollection,
};
