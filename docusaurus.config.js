// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CloudSmith',
  tagline: 'Forge your private cloud.',
  url: 'https://cloudsmith.cloud',
  baseUrl: '/',
  organizationName: 'cloudsmith-cloud',
  projectName: 'cloudsmith-cloud.github.io',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: 'description',
          content:
            'A modern, open-source cloud platform management solution for Azure Local and Hyper-V environments.',
        },
        { property: 'og:title', content: 'CloudSmith — Forge your private cloud.' },
        {
          property: 'og:description',
          content:
            'Full-lifecycle platform management for Azure Local and Hyper-V. Built for engineers, open source by design.',
        },
      ],
      navbar: {
        title: 'CloudSmith',
        hideOnScroll: false,
        items: [
          {
            href: 'https://github.com/cloudsmith-cloud',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cloudsmith-cloud',
              },
              {
                label: 'cloudsmith.app',
                href: 'https://cloudsmith.app',
              },
            ],
          },
          {
            title: 'Created by',
            items: [
              {
                label: 'Hybrid Cloud Solutions',
                href: 'https://hybridsolutions.cloud',
              },
              {
                label: 'Country Cloud Boy',
                href: 'https://thisismydemo.cloud',
              },
            ],
          },
        ],
        copyright: `Built by <a href="https://hybridsolutions.cloud" target="_blank" rel="noopener noreferrer">Hybrid Cloud Solutions</a> — CloudSmith will be open source.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', 'bash'],
      },
    }),
};

module.exports = config;
