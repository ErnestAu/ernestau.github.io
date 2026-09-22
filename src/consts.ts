export const SITE = {
  name: 'Ernest Au',
  domain: 'ernestau.com',
  url: 'https://ernestau.com',
  title: 'Ernest Au',
  description:
    "my learning journal",
} as const;

export const GREETING = 'hi, welcome! 👋';

export const INTRO = `if you're new here, here's what to expect!`;

export const EXPECT: { heading: string; paras: string[] }[] = [
  {
    heading: '❌ no AI slop',
    paras: [
      'everything here is written in my words and my words only.',
      'i mean, i do use AI for fact checking, drawing helpful diagrams, and the occasional spell check.',
      'and i did use it to build this whole website 🤨',
      'the point is that YOU as the reader and ME as the writer work with real human words.',
      `expect to come across a bunch of 'i thinks', 'it seems likes', and 'i dont really knows'.`,
      'expect be unwillingly led to weird tangents that have nothing to do with the title of the article.',
      'oh, and expect to not find em dashes. that there is a promise.',
    ],
  },
  {
    heading: '✅ my learning journey',
    paras: [
      'here, i write and document what i learn in the form of articles!',
      `when i write, it REALLY exposes all my knowledge gaps. i'm forced to consolidate the gaps so i can actually finish the article haha.`,
      'on top of that, i find that writing scratches a creative itch in my brain. i think as humans, it just feels good to be creative yk?',
      `actually, right now as i'm writing this, i'm thinking that i might use this to write about other stuff other than just learning, like personal thoughts or philosophy.`,
      'i guess that leads me to my next point.',
    ],
  },
  {
    heading: '✅ change and growth',
    paras: [
      `it's 22 sep 2026 as i'm writing this.`,
      `currently, i'm interested in data engineering, fitness, creative works, and a lil bit of philosophy.`,
      `but i'm a living breathing human. i change dude.`,
      '5 years from now, i might look back at this with pride, or i might look back at it and cringe.',
      'somewhere along the way, i might decide that NONE of these rules apply.',
      `maybe i'll turn around and say`,
      `<em>all hail our AI overlords. they know what's best for us. let us bask in the never ending springs of content they graciously generate for our consumption.</em>`,
    ],
  },
];

export const LABELS = {
  elsewhere: 'elsewhere',
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: 'til', href: '/til' },
  // { label: 'Videos',   href: '/videos'   },
  // { label: 'Projects', href: '/projects' },
];

export const ELSEWHERE: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/ErnestAu' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ernestau2465' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ernestywau' },
];
