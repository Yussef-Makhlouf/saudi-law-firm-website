import { siteConfig } from '@/lib/site-config'

export function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Attorney',
                '@id': `${siteConfig.url}/#attorney`,
                name: siteConfig.name,
                url: siteConfig.url,
                telephone: siteConfig.contact.phone,
                email: siteConfig.contact.email,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Riyadh',
                    addressCountry: 'SA',
                    streetAddress: siteConfig.contact.location,
                },
                image: {
                    '@type': 'ImageObject',
                    url: `${siteConfig.url}/og-image.jpg`,
                },
                priceRange: '$$$',
                openingHoursSpecification: [
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                        opens: '09:00',
                        closes: '18:00',
                    },
                ],
            },
            {
                '@type': 'WebSite',
                '@id': `${siteConfig.url}/#website`,
                url: siteConfig.url,
                name: siteConfig.name,
                description: siteConfig.description,
                publisher: {
                    '@id': `${siteConfig.url}/#attorney`,
                },
                inLanguage: 'ar-SA',
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
