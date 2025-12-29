import { getCollection } from 'astro:content';

export async function GET() {
  const docs = await getCollection('docs');
  const baseUrl = 'https://stremio.prabhu-tools.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${docs
  .map((doc: any) => {
    const url = doc.slug === 'index' ? baseUrl : `${baseUrl}/${doc.slug}`;
    const lastmod = new Date().toISOString().split('T')[0];
    
    // Priority based on page importance
    let priority = '0.5';
    if (doc.slug === 'index') priority = '1.0';
    else if (doc.slug.startsWith('start-here/')) priority = '0.9';
    else if (doc.slug.startsWith('install/')) priority = '0.8';
    else if (doc.slug.startsWith('troubleshooting/')) priority = '0.7';
    else if (doc.slug === 'faq/faq' || doc.slug === 'glossary/index') priority = '0.8';
    
    // Change frequency
    let changefreq = 'monthly';
    if (doc.slug === 'index') changefreq = 'weekly';
    else if (doc.slug.startsWith('start-here/') || doc.slug.startsWith('install/')) changefreq = 'weekly';
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
