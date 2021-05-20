/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'HPC Documentation',
  tagline: 'For Icelandic National Computing resources',
  url: 'https://irhpc.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'irhpc',
  projectName: 'irphc.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'is'],
  },
  themeConfig: {
    navbar: {
      title: 'HPC Docs',
      logo: {
        alt: 'IRHPC Logo',
        src: 'img/logo.svg',
        href: 'https://irhpc.github.io',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'User Docs',
        },
        {to: '/announcements', label: 'Announcements', position: 'left'},
        {
          href: 'https://ihpc.is/',
          label: 'Older Site',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Announcements',
              to: '/announcements',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/irhpc/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RHnet and RHÍ. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/irhpc/irhpc.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          id: 'announcements',
          routeBasePath: 'announcements',
          path: './announcements',
          editUrl:
            'https://github.com/irhpc/irhpc.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
      },
    ],
  ],
};
