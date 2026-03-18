import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.edsbangers.com';

  const staticPages = [
    { url: `${base}/`,         priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/shop`,     priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/weddings`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/about`,    priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/events`,   priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/blog`,     priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/contact`,  priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...blogPages];
}
