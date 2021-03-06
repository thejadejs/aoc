export const SITE = {
  title: 'Documentation',
  description: 'Your website description.',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: '', header: true },
    // { text: 'Section Header', header: true },
    // { text: 'Introduction', link: 'en/introduction' },
    // { text: 'Page 2', link: 'en/page-2' },
    // { text: 'Page 3', link: 'en/page-3' },

    // { text: 'Another Section', header: true },
    // { text: 'Page 4', link: 'en/page-4' },

    { text: 'AoC 2021', header: true },
    { text: 'Day 1', link: 'en/2021/01' },
    { text: 'Day 2', link: 'en/2021/02' },
    { text: 'Day 3', link: 'en/2021/03' },
    { text: 'Day 4', link: 'en/2021/04' },
    { text: 'Day 5', link: 'en/2021/05' },
    { text: 'Day 6', link: 'en/2021/06' },
    { text: 'Day 7', link: 'en/2021/07' },
    { text: 'Day 8', link: 'en/2021/08' },
    { text: 'Day 9', link: 'en/2021/09' },
    { text: 'Day 10', link: 'en/2021/10' },
  ],
};
