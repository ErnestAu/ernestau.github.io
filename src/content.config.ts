import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Each til entry is one markdown file in src/content/til/.
 * The filename becomes the URL: spark-partitions.md -> /til/spark-partitions
 *
 * The schema below is enforced at build time. If a field is missing or the
 * wrong type, the build fails and tells you which file and which field -
 * so a broken entry can never reach the live site.
 */
const til = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/til' }),
  schema: z.object({
    /** Shown as the page heading, in the list, and in the browser tab. */
    title: z.string(),
    /** Optional. One line, shown under the title in the list and in link
     *  previews. Leave it out and the list shows just the title, while the
     *  page falls back to the site-wide description for its meta tags. */
    description: z.string().optional(),
    /** Written as YYYY-MM-DD. Sorts the list, newest first. */
    date: z.coerce.date(),
    /** Which bucket this belongs in: japanese, data-engineering, workouts,
     *  life, philosophy, whatever you invent next. Nothing renders it yet -
     *  it's here so that when you build category pages, the entries already
     *  carry the data and nothing needs backfilling. */
    category: z.string().optional(),
    /** draft: true is visible while developing, but never published. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { til };
