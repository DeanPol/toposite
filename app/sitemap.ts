import { MetadataRoute } from 'next';

const baseUrl = 'https://politis-engineering.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each route
  routes.forEach((route) => {
    // Greek (el) - root path
    const elUrl = route === '' ? `${baseUrl}/` : `${baseUrl}${route}`;
    
    // English (en) - /en path
    const enUrl = `${baseUrl}/en${route}`;
    
    // Add Greek entry (default)
    sitemapEntries.push({
      url: elUrl,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          el: elUrl,
          en: enUrl,
          'x-default': elUrl,
        },
      },
    });

    // Add English entry
    sitemapEntries.push({
      url: enUrl,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 0.9 : 0.7,
      alternates: {
        languages: {
          el: elUrl,
          en: enUrl,
          'x-default': elUrl,
        },
      },
    });
  });

  return sitemapEntries;
}
