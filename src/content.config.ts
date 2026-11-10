import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    bajada: z.string(),
    fecha: z.coerce.date(),
    tema: z.string(),
    lectura: z.string().default("5 min"),
    autor: z.string().default("Carlos Adrián Ramírez Gómez"),
    cargo: z.string().default("Ingeniero mecánico"),
    portada: z.string().optional(),
    portadaAlt: z.string().optional(),
  }),
});

export const collections = { blog };
