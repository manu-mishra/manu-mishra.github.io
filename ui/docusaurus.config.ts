import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Manu Mishra',
  tagline: 'Solutions Architect & Applied Software Engineer',
  favicon: 'img/manu-mishra-fav-icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://manumishra.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'manu-mishra', // Your GitHub org/user name.
  projectName: 'manu-mishra.github.io', // Your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Add scripts for early theme application
  scripts: [
    {
      src: '/scripts/apply-theme.js',
      async: false,
      defer: false,
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable docs plugin
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove editUrl to remove the "edit this page" links
          authorsMapPath: './blog/authors.yml',
          onInlineAuthors: 'ignore',
          blogSidebarTitle: 'All Blog Posts',
          blogSidebarCount: 'ALL',
          sortPosts: 'descending',
          postsPerPage: 6,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/themes/**', '/blog/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/manu-mishra-headshot-white-bg.jpg',
    metadata: [
      {name: 'og:image', content: 'https://manumishra.com/img/manu-mishra-headshot-white-bg.jpg'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:image', content: 'https://manumishra.com/img/manu-mishra-headshot-white-bg.jpg'},
    ],
    navbar: {
      title: 'Manu Mishra',
      logo: {
        alt: 'Manu Mishra Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/experience', label: 'Experience', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/manu-mishra',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/manu-mishra',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            {
              label: 'Experience',
              to: '/experience',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About',
              to: '/about',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/manu-mishra',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/manu-mishra',
            },
            {
              label: 'Email',
              href: 'mailto:mishra.manu@outlook.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Manu Mishra. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
