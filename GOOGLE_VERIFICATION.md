# Google Search Console Verification

After deploying your site, you'll need to verify ownership with Google Search Console.

## Steps to Verify

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your website URL)
3. Choose verification method:
   - **HTML file upload** (recommended)
   - HTML meta tag
   - Google Analytics
   - Google Tag Manager
   - Domain name provider

## HTML File Method

If you choose HTML file verification:

1. Google will provide a file like `google1234567890abcdef.html`
2. Download the file
3. Place it in `/public/` directory of this project
4. Commit and deploy
5. Click "Verify" in Search Console

## HTML Meta Tag Method

If you choose meta tag verification:

1. Google will provide a meta tag like:
   ```html
   <meta name="google-site-verification" content="your-verification-code" />
   ```
2. Add this to the `head` array in `astro.config.mjs`:
   ```javascript
   {
     tag: 'meta',
     attrs: {
       name: 'google-site-verification',
       content: 'your-verification-code',
     },
   },
   ```

## After Verification

Once verified:

1. Submit your sitemap: `https://your-domain.com/sitemap.xml`
2. Monitor indexing status
3. Check for crawl errors
4. Review search performance

## Bing Webmaster Tools

Repeat similar process for Bing:
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership (import from Google Search Console is easiest)
4. Submit sitemap

---

**Note:** This file is for documentation purposes. The actual verification file will be added when you verify with Google.
