import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = siteConfig.nav.map((route) => ({
        url: `${siteConfig.url}${route.href}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route.href === '/' ? 1 : 0.8,
    }))

    return [...routes]
}
