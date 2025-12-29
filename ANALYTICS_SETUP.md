# Analytics Setup Guide

This guide explains how to add Google Analytics 4 (GA4) to track visitor behavior and SEO performance.

## Why Add Analytics?

Analytics help you:
- Track page views and popular content
- Monitor user behavior and navigation
- Measure SEO performance
- Identify traffic sources
- Track conversions and goals
- Improve content based on data

## Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Admin" → "Create Property"
3. Enter property details:
   - **Property name**: Stremio User Guide
   - **Reporting time zone**: Your timezone
   - **Currency**: Your currency
4. Click "Next" and complete setup

### Step 2: Get Measurement ID

1. In GA4, go to Admin → Data Streams
2. Click "Add stream" → "Web"
3. Enter your website URL
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add to Astro Project

**Recommended: Using Environment Variable (Already Configured)**

This project is pre-configured to use environment variables for Google Analytics.

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Measurement ID:
   ```env
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. That's it! The analytics will automatically be included when you build/deploy.

**How it works:**

The `astro.config.mjs` file already includes this code:

```javascript
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
```

**Alternative Option: Hardcode in Config (Not Recommended)**

If you prefer to hardcode the ID (not recommended for security):

Add to `astro.config.mjs` in the `starlight()` configuration:

```javascript
starlight({
  // ... other config
  head: [
    // ... existing head entries
    {
      tag: 'script',
      attrs: {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
      },
    },
    {
      tag: 'script',
      attrs: {},
      content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `,
    },
  ],
}),
```

### Step 4: Deploy Configuration

**Important:** When deploying to production (Vercel, Netlify, etc.), add the environment variable in your hosting platform:

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add: `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
3. Redeploy

**Netlify:**
1. Go to Site Settings → Build & Deploy → Environment
2. Add: `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
3. Redeploy

**Other Platforms:**
- Add the environment variable in your platform's settings
- The variable name must be exactly: `PUBLIC_GA_MEASUREMENT_ID`

### Step 5: Privacy Compliance

**Important**: Add privacy notice to your site:

1. Update `src/components/Footer.astro` with:
   ```
   This site uses Google Analytics to improve user experience.
   See our Privacy Policy for details.
   ```

2. Consider adding:
   - Cookie consent banner
   - Privacy policy page
   - Option to opt-out of tracking

### Step 6: Verify Installation

1. Deploy your site
2. Visit your website
3. In GA4, go to Reports → Realtime
4. You should see your visit appear within 30 seconds

## What to Track

### Important Metrics

1. **Page Views**: Most popular pages
2. **User Flow**: How users navigate
3. **Bounce Rate**: Pages where users leave
4. **Time on Page**: Content engagement
5. **Traffic Sources**: Where visitors come from
6. **Search Queries**: What brings users (via Search Console)

### Custom Events (Advanced)

Track specific interactions:

```javascript
// Track outbound links
gtag('event', 'click', {
  'event_category': 'outbound',
  'event_label': 'github_repo'
});

// Track search
gtag('event', 'search', {
  'search_term': query
});

// Track file downloads
gtag('event', 'file_download', {
  'file_name': 'stremio-guide.pdf'
});
```

## Google Search Console Integration

Link GA4 with Search Console:

1. In GA4, go to Admin → Product Links
2. Click "Search Console Links"
3. Click "Link" and follow prompts
4. This combines organic search data with behavior data

## Reports to Monitor

### Weekly

- **Realtime**: Check current visitors
- **Pages and Screens**: Popular content
- **Traffic Acquisition**: Traffic sources

### Monthly

- **Engagement**: Time on site, pages per session
- **Demographics**: User locations and devices
- **Search Queries** (Search Console): Top search terms
- **Landing Pages**: Entry points

### Quarterly

- **Trends**: Growth over time
- **Goal Completions**: Conversions (if set up)
- **Content Performance**: Best/worst performing pages

## Other Analytics Options

### Plausible Analytics (Privacy-Focused)

Lighter alternative to GA4:

```astro
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Fathom Analytics (Privacy-Focused)

Another GDPR-compliant option:

```astro
<script src="https://cdn.usefathom.com/script.js" data-site="ABCDEFG" defer></script>
```

### Simple Analytics (Privacy-Focused)

No cookies required:

```astro
<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
```

## Privacy-First Approach

If you want to avoid Google Analytics entirely:

1. **Self-hosted**: Use Matomo or Umami
2. **Privacy-focused**: Plausible, Fathom, Simple Analytics
3. **Server logs**: Analyze server logs with GoAccess
4. **No tracking**: Rely on Search Console only

## Key Performance Indicators (KPIs)

Track these metrics for SEO success:

1. **Organic Traffic**: Visitors from search engines
2. **Average Time on Page**: >2 minutes for guides
3. **Bounce Rate**: <50% target
4. **Pages per Session**: >2 target
5. **Conversion Rate**: Newsletter signups, etc.
6. **Search Rankings**: Track in Search Console
7. **Backlinks**: Monitor in Ahrefs/SEMrush

## Troubleshooting

**Analytics not working?**

1. Check Measurement ID is correct
2. Verify script is in `<head>` section
3. Check browser console for errors
4. Disable ad blockers when testing
5. Wait 24-48 hours for data to appear in reports

**Privacy concerns?**

1. Add cookie consent banner
2. Anonymize IP addresses in GA4
3. Create privacy policy
4. Consider privacy-focused alternatives

---

**Next Steps:**

1. Set up Google Analytics 4
2. Link Search Console
3. Monitor for 1 month
4. Analyze data and optimize content
5. Set up custom events (optional)

**Resources:**

- [GA4 Documentation](https://support.google.com/analytics)
- [Search Console Help](https://support.google.com/webmasters)
- [Privacy-Focused Analytics Comparison](https://plausible.io/vs-google-analytics)
