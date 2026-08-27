/**
 * Everything personal about the site lives here.
 * Edit this file to change copy — you shouldn't need to touch the components.
 */

export const SITE = {
  name: 'Ernest Au',
  domain: 'ernestau.com',
  url: 'https://ernestau.com',
  /** Shown in the browser tab and as the OG site name. */
  title: 'Ernest Au',
  /** One sentence. This is the single most important string on the site. */
  description:
    'Software engineer writing about building things with modern tooling, AI, and the craft of shipping.',
} as const;

/** The line under your name on the homepage. Keep it short and concrete. */
export const TAGLINE = 'Software engineer. I build things and write about how they work.';

/** The homepage intro paragraph. Two or three sentences, plain language. */
export const INTRO = `I'm a software engineer interested in how things are actually built — the
architecture decisions, the trade-offs, and the parts that only show up once
something is running in production. I write and make videos about what I learn
along the way.`;

/** Short list of what you're working on right now. Cheap to update — that's the point. */
export const CURRENTLY: string[] = [
  'Building this site with Astro, deployed on GitHub Pages',
  'Exploring what agentic coding tools change about day-to-day engineering',
  'Writing up things I learn as I go',
];

/** Links in the header. Add entries here as sections ship. */
export const NAV: { label: string; href: string }[] = [
  { label: 'About', href: '/about' },
  // { label: 'Writing',  href: '/writing'  },
  // { label: 'Videos',   href: '/videos'   },
  // { label: 'Projects', href: '/projects' },
];

/** External profiles. Remove any you don't want public. */
export const ELSEWHERE: { label: string; href: string; handle: string }[] = [
  { label: 'GitHub', href: 'https://github.com/', handle: '@ernestau' },
  { label: 'YouTube', href: 'https://youtube.com/', handle: '@ernestau' },
  { label: 'Email', href: 'mailto:ernestau7@gmail.com', handle: 'ernestau7@gmail.com' },
];
