// Kolekcje treści: wpisy na blogu i produkty w sklepie.
// Każdy plik .md w podanym folderze to jeden wpis / jeden produkt.
// Nazwa pliku (bez .md) staje się adresem, np. src/content/blog/tapas.md → /blog/tapas/
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),                 // pełny tytuł (karta i nagłówek wpisu)
    shortTitle: z.string(),            // krótki tytuł (okruszki, linki „Czytaj dalej”)
    excerpt: z.string(),               // zajawka na karcie
    category: z.string(),
    date: z.coerce.date(),
    author: z.enum(['oskar', 'krystian', 'dawid']),
    image: z.string(),                 // zdjęcie karty 800×600 (ścieżka w folderze public)
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    // pola opcjonalne
    seoTitle: z.string().optional(),
    description: z.string().optional(),
    readingTime: z.string().optional(),
    ogImage: z.string().optional(),
    featured: z.object({ title: z.string(), thumb: z.string(), thumbAlt: z.string() }).optional(),
    cover: z.object({ src: z.string(), large: z.string().optional(), alt: z.string(), caption: z.string().optional() }).optional(),
    comments: z.array(z.object({
      author: z.string(),
      date: z.coerce.date(),
      text: z.string(),
      replies: z.array(z.object({
        author: z.string().optional(),
        byPostAuthor: z.boolean().default(false),
        date: z.coerce.date(),
        text: z.string(),
      })).default([]),
    })).default([]),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    sku: z.string(),
    category: z.string(),
    categoryLabel: z.string(),
    price: z.number(),
    oldPrice: z.number().optional(),
    priceFrom: z.boolean().optional(),
    badge: z.string().optional(),
    rating: z.number(),
    reviewsCount: z.number(),
    popularity: z.number(),
    inStock: z.boolean(),
    colors: z.array(z.string()),
    images: z.array(z.object({ src: z.string(), thumb: z.string(), alt: z.string() })),
    lead: z.string(),
    specs: z.array(z.tuple([z.string(), z.string()])),
    variant: z.object({
      label: z.string(),
      options: z.array(z.object({ label: z.string(), price: z.number().optional() })),
    }),
    reviews: z.array(z.object({ author: z.string(), rating: z.number(), date: z.string(), text: z.string() })),
  }),
});

export const collections = { blog, products };
