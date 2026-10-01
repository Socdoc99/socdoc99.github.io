import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
  summary: z.string(),
  stack: z.array(z.string()),
  status: z.string(),
  repoUrl: z.string().url(),
  order: z.number(),
});

const projectsEs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects/es' }),
  schema: projectSchema,
});

const projectsEn = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects/en' }),
  schema: projectSchema,
});

export const collections = {
  'projects-es': projectsEs,
  'projects-en': projectsEn,
};
