import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Stremio User Guide',
      description: 'Complete documentation for installing, configuring, and safely using Stremio',
      social: {
        github: 'https://github.com/Stremio',
      },
      editLink: {
        baseUrl: 'https://github.com/i-hakuna-matata/stremio-docs/edit/main/',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'What is Stremio?', link: '/start-here/what-is-stremio/' },
            { label: 'Safety & Legality', link: '/start-here/safety-and-legality/' },
            { label: 'First 10 Minutes Setup', link: '/start-here/first-10-minutes-setup/' },
            { label: 'Glossary for Beginners', link: '/start-here/glossary-for-beginners/' },
            { label: 'What to Do Next', link: '/start-here/what-to-do-next/' },
          ],
        },
        {
          label: 'Installation',
          items: [
            { label: 'Overview', link: '/install/overview/' },
            { label: 'Windows', link: '/install/windows/' },
            { label: 'macOS', link: '/install/macos/' },
            { label: 'Linux', link: '/install/linux/' },
            { label: 'Android Phone/Tablet', link: '/install/android-phone-tablet/' },
            { label: 'Android TV', link: '/install/android-tv/' },
            { label: 'Web Browser', link: '/install/web/' },
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
            { label: 'Add-ons Explained', link: '/addons/addons-explained/' },
            { label: 'Install & Remove Add-ons Safely', link: '/addons/how-to-install-remove-addons-safely/' },
            { label: 'Evaluate Add-on Trust', link: '/addons/how-to-evaluate-addon-trust/' },
            { label: 'Catalogs & Metadata Add-ons', link: '/addons/catalogs-and-metadata-addons/' },
            { label: 'Subtitle Add-ons', link: '/addons/subtitles-addons-legal-notes/' },
            { label: 'AIOStream: Safety Note', link: '/addons/aiostream-safety-note/' },
          ],
        },
        {
          label: 'Metadata Management',
          items: [
            { label: 'Metadata Explained', link: '/metadata/metadata-explained/' },
            { label: 'Metadata Add-on Setup', link: '/metadata/aiometadata-setup/' },
            { label: 'Fix Wrong Posters/Titles', link: '/metadata/fix-wrong-posters-titles/' },
            { label: 'Language & Regional Settings', link: '/metadata/language-and-regional-settings/' },
            { label: 'Clean Library Best Practices', link: '/metadata/best-practices-for-clean-library/' },
          ],
        },
        {
          label: 'Troubleshooting',
          items: [
            { label: 'Overview', link: '/troubleshooting/overview/' },
            { label: 'Playback & Buffering', link: '/troubleshooting/playback-buffering/' },
            { label: 'Subtitles Not Working', link: '/troubleshooting/subtitles-not-working/' },
            { label: 'Audio/Video Sync', link: '/troubleshooting/audio-video-sync/' },
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
          label: 'FAQ',
          link: '/faq/faq/',
        },
        {
          label: 'Glossary',
          link: '/glossary/',
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
