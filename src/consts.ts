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
    "my learning journal. i'm ernest, a data engineer — i break down the concepts i struggled with (aws, databricks, spark) until they're actually easy to understand.",
} as const;

/** The headline at the top of the homepage. */
export const GREETING = 'hi, welcome! 👋';

/** The homepage intro paragraph. Plain language, no job titles. */
export const INTRO = `this site is my learning journal. i often struggle with complicated
concepts, and i think many people quietly struggle too. so my goal is to break
them down and make them easy to understand.`;

/**
 * The about section. Each item renders as its own paragraph.
 * Items are HTML, so <a href="...">links</a> and <br /> line breaks both work.
 */
export const ABOUT: string[] = [
  "i work as a data engineer at EY. we get a lot of projects to build ai tools. so, i build the pipelines that turn a company's data into something that ai can process.",
  "i think over my career, i find myself leaning towards engineering work. as in, i really like building systems that work, and so it's this personality trait of mine that makes me make tiny little subconscious micro-decisions that shape my journey.",
  "fun fact: one thing i'd argue with another engineer about is that - we should sleep on it. like literally. let's say we need to make a design decision (it will impact our project for the months to come). first, brainstorm some design options. second, go home and get some rest. then tomorrow, with fresh eyes, make the decision. it would save us a lot of trouble.",
];

/** The `//` section headings, in the order they appear down the page. */
export const LABELS = {
  about: 'about me',
  working: "what i'm working on",
  elsewhere: 'elsewhere',
} as const;

/**
 * Short list of what you're working on right now. Cheap to update — that's the point.
 * Items are rendered as HTML, so you can put <a href="...">links</a> inside a sentence.
 */
export const CURRENTLY: string[] = [
  'creating content. for me, this acts as a creative outlet in a sometimes not so creative field.',
  'strengthening concepts. modern tools make it easy to build stuff. but i think that makes understanding fundamentals all the more important. at least for now ¯\\_(ツ)_/¯',
  `<a href="https://github.com/ErnestAu/food-delivery-pipeline">my food delivery pipeline</a>. it's 90% done. but there are some final touches i want. i wanna use dbt to perform CI checks, and terraform so that anyone can rebuild the infrastructure easily.`,
];

/** Links in the header. Add entries here as sections ship. */
export const NAV: { label: string; href: string }[] = [
  { label: 'til', href: '/til' },
  // { label: 'Videos',   href: '/videos'   },
  // { label: 'Projects', href: '/projects' },
];

/** External profiles. Remove any you don't want public. */
export const ELSEWHERE: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/ErnestAu' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ernestau2465' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ernestywau' },
];
