import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Get Google Analytics ID from environment variable
const GA_ID = process.env.PUBLIC_GA_MEASUREMENT_ID || '';

// Build Google Analytics tags if ID is provided
const buildGoogleAnalyticsTags = (gaId) => {
  if (!gaId) return [];
  
  return [
    {
      tag: 'script',
      attrs: {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
      },
    },
    {
      tag: 'script',
      attrs: {},
      content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `,
    },
  ];
};

// https://astro.build/config
export default defineConfig({
  site: 'https://stremio.prabhu-tools.com',
  integrations: [
    starlight({
      title: 'Stremio Setup Guide',
      description: 'Complete step-by-step guide for installing, configuring, and safely using Stremio. Learn about add-ons, metadata, troubleshooting, privacy, and security. Beginner-friendly tutorials for Windows, Mac, Linux, Android TV.',
      head: [
        // Google Analytics (if configured)
        ...buildGoogleAnalyticsTags(GA_ID),

        // Favicons (ensure /favicon.ico requests succeed)
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon.ico',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
        },

        // SEO Meta Tags
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: 'Stremio, Stremio guide, Stremio tutorial, Stremio setup, streaming app, media center, Stremio add-ons, Stremio installation, Android TV, FireStick, streaming guide, legal streaming, Stremio help, Stremio troubleshooting',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'Stremio Setup Guide Community',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        },
        // Open Graph / Facebook
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'Stremio Setup Guide',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:locale',
            content: 'en_US',
          },
        },
        // Twitter Card
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:creator',
            content: '@stremio',
          },
        },
        // Canonical Link (will be overridden per page)
        {
          tag: 'link',
          attrs: {
            rel: 'canonical',
            href: 'https://stremio.prabhu-tools.com',
          },
        },
        // JSON-LD Structured Data
        {
          tag: 'script',
          attrs: {
            type: 'application/ld+json',
          },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Stremio Setup Guide',
            description: 'Complete documentation for installing, configuring, and safely using Stremio',
            url: 'https://stremio.prabhu-tools.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://stremio.prabhu-tools.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        },
        // External Links Script - Open external links in new tabs
        {
          tag: 'script',
          content: `
            document.addEventListener('DOMContentLoaded', function() {
              const links = document.querySelectorAll('a[href]');
              const currentHost = window.location.hostname;

              links.forEach(link => {
                const linkHost = new URL(link.href, window.location.origin).hostname;
                if (linkHost !== currentHost && !link.hasAttribute('target')) {
                  link.setAttribute('target', '_blank');
                  link.setAttribute('rel', 'noopener noreferrer');
                }
              });
            });
          `,
        },
      ],
      social: {
        github: 'https://github.com/i-hakuna-matata/stremio-docs',
      },
      editLink: {
        baseUrl: 'https://github.com/i-hakuna-matata/stremio-docs/edit/main/',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      lastUpdated: true,
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'What is Stremio? Complete Guide to the Media Center App (2025)', link: '/start-here/what-is-stremio/' },
            { label: 'Safety & Legality', link: '/start-here/safety-and-legality/' },
            { label: 'First 10 Minutes Setup', link: '/start-here/first-10-minutes-setup/' },
            { label: 'Glossary for Beginners', link: '/start-here/glossary-for-beginners/' },
            { label: 'What to Do Next', link: '/start-here/what-to-do-next/' },
          ],
        },
        {
          label: 'Installation',
          items: [
            { label: 'Installation Overview', link: '/install/overview/' },
            { label: 'How to Install Stremio on Windows (10/11) - Step by Step Guide 2025', link: '/install/windows/' },
            { label: 'Install Stremio on macOS', link: '/install/macos/' },
            { label: 'Install Stremio on Linux', link: '/install/linux/' },
            { label: 'Install Stremio on Android Phone/Tablet', link: '/install/android-phone-tablet/' },
            { label: 'Install Stremio on Android TV, Fire TV & FireStick (2025 Guide)', link: '/install/android-tv/' },
            { label: 'Use Stremio in Web Browser', link: '/install/web/' },
          ],
        },
        {
          label: 'Using Stremio',
          items: [
            { label: 'Navigation Basics', link: '/using-stremio/navigation-basics/' },
            { label: 'Search & Discover', link: '/using-stremio/search-discover/' },
            { label: 'Library, Watchlist & History', link: '/using-stremio/library-watchlist-history/' },
            { label: 'Player, Subtitles & Audio', link: '/using-stremio/player-settings-subtitles-audio/' },
            { label: 'Sync & Multiple Devices', link: '/using-stremio/sync-and-multiple-devices/' },
            { label: 'Accessibility Settings', link: '/using-stremio/accessibility-settings/' },
          ],
        },
        {
          label: 'Add-ons',
          items: [
            { label: 'Stremio Add-ons Explained - Complete Guide to Extensions (2025)', link: '/addons/addons-explained/' },
            { label: 'Stremio Add-ons Showcase - Complete Directory', link: '/addons/addon-showcase/' },
            { label: 'Famous Stremio Add-ons - Quick Reference', link: '/addons/famous-stremio-addons/' },
            { label: 'Install & Remove Add-ons Safely', link: '/addons/how-to-install-remove-addons-safely/' },
            { label: 'Evaluate Add-on Trust', link: '/addons/how-to-evaluate-addon-trust/' },
            { label: 'Catalogs & Metadata Add-ons', link: '/addons/catalogs-and-metadata-addons/' },
            { label: 'Subtitle Add-ons', link: '/addons/subtitles-addons-legal-notes/' },
            { label: 'Debrid Media Manager (DMM) - Stremio Add-on Guide', link: '/addons/debrid-media-manager/' },
            { label: 'AIOStream Formatters - Custom Title & Description Codes', link: '/addons/aiostream-formatters/' },
            { label: 'AIOStream: Your Complete Streaming Setup Guide', link: '/addons/aiostream-setup-guide/' },
          ],
        },
        {
          label: 'Metadata Management',
          items: [
            { label: 'Metadata Explained', link: '/metadata/metadata-explained/' },
            { label: 'AIOMetadata - Complete Setup Guide', link: '/metadata/aiometadata-setup/' },
            { label: 'Fix Wrong Posters/Titles', link: '/metadata/fix-wrong-posters-titles/' },
            { label: 'Language & Regional Settings', link: '/metadata/language-and-regional-settings/' },
            { label: 'Clean Library Best Practices', link: '/metadata/best-practices-for-clean-library/' },
          ],
        },
        {
          label: 'Troubleshooting',
          items: [
            { label: 'Stremio Troubleshooting Guide - Fix Common Problems (2025)', link: '/troubleshooting/overview/' },
            { label: 'Playback & Buffering Issues', link: '/troubleshooting/playback-buffering/' },
            { label: 'Subtitles Not Working', link: '/troubleshooting/subtitles-not-working/' },
            { label: 'Audio/Video Sync Issues', link: '/troubleshooting/audio-video-sync/' },
            { label: 'App Crashes & Freezes', link: '/troubleshooting/app-crashes-and-freezes/' },
            { label: 'Login & Sync Issues', link: '/troubleshooting/login-sync-issues/' },
            { label: 'Android TV Performance', link: '/troubleshooting/android-tv-performance/' },
            { label: 'Network Checklist', link: '/troubleshooting/network-checklist/' },
            { label: 'Troubleshooting Decision Tree', link: '/troubleshooting/troubleshooting-tree/' },
          ],
        },
        {
          label: 'Privacy & Security',
          items: [
            { label: 'Privacy Basics', link: '/privacy-security/privacy-basics/' },
            { label: 'Account Security', link: '/privacy-security/account-security/' },
            { label: 'Device Security (TV Sticks)', link: '/privacy-security/device-security-tv-sticks/' },
            { label: 'Avoiding Suspicious Add-ons', link: '/privacy-security/avoiding-suspicious-addons/' },
            { label: 'Reporting Issues & Scams', link: '/privacy-security/reporting-issues-and-scams/' },
          ],
        },
        {
          label: 'Stremio FAQ - 40+ Frequently Asked Questions & Answers (2025)',
          link: '/faq/faq/',
        },
        {
          label: 'Complete Glossary',
          link: '/glossary/',
        },
        {
          label: 'Complete Site Map - All Stremio Documentation Pages',
          link: '/sitemap/',
        },
        {
          label: 'Credits & Acknowledgments',
          link: '/credits/',
        },
      ],
      components: {
        // Override the default Footer component to add disclaimer
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
});
