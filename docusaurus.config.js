// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// import i18n from './config/i18n.config.js';

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Blog',
  tagline: 'programming is cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://akacoder404.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/MyBlog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'akacoder404', // Usually your GitHub org/user name.
  projectName: 'MyBlog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    // path: 'i18n',
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        // path: 'en',
        htmlLang: 'en-US',
      },
      zh: {
        // path: 'zh',
        htmlLang: 'zh-CN',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/akacoder404/MyBlog',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/akacoder404/MyBlog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AkaCoder404',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/showcase', label: 'Showcase', position: 'left' },
          {
            href: 'https://github.com/akacoder404/MyBlog  MY',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://github.com/facebook/docusaurus/issues/3526',
                label: 'Help Me Translate!',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Tutorial', to: '/docs/intro' },
            ],
          },
          {
            title: 'Platforms',
            items: [
              { label: 'Dev.to', href: 'https://dev.to/akacoder404', },
              { label: 'Medium', href: 'https://medium.com/@thegeorgeyli' },
            ],
          },
          {
            title: 'Social Media',
            items: [
              { label: 'Little Red Book', href: 'https://medium.com/' },
              { label: 'Twitter', href: 'https://dev.to/', },
              { label: 'Instagram', href: 'https://medium.com/' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog', },
              { label: 'GitHub', href: 'https://github.com/akacoder404/', },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AkaCoder404's Blog - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
