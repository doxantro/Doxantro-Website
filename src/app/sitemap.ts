import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://doxantro.com';
  const lastModified = new Date();

  const routes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/case-studies`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/ai-finance`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/ai-healthcare`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/ai-agriculture`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/ai-supply-chain`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/ai-security`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/ai-energy`, priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
