import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.toString() ?? '';
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap-index.xml\n`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
};
