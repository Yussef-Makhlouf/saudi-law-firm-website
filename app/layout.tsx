import React from "react"
import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Legal Counsel | Modern Law Practice in Riyadh',
  description: 'Premium legal services for individuals and businesses in Saudi Arabia. Specializing in criminal, labor, commercial, and investment law.',
  generator: 'v0.app',
  metadataBase: new URL('https://legal-counsel.com'),
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://legal-counsel.com',
    title: 'Legal Counsel | Modern Law Practice',
    description: 'Premium legal services in Riyadh, Saudi Arabia',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${_ibmPlexSansArabic.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
