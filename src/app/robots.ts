import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Rute yang tidak boleh di-crawl Google (opsional)
    },
    sitemap: 'https://tetsumarket.my.id/sitemap.xml',
  };
}