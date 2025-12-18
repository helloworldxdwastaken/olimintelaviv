import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://olimintelav.com'),
  title: {
    default: 'Olim in TLV - Your Guide to Life in Tel Aviv',
    template: '%s | Olim in TLV',
  },
  description: 'Connect, explore, and thrive as an oleh in Tel Aviv. Find housing, dating, university info, restaurants, and local tips.',
  keywords: ['Tel Aviv', 'Israel', 'Olim', 'Aliyah', 'Dating', 'Renting', 'University', 'Expats'],
  authors: [{ name: 'Olim in TLV' }],
  creator: 'Olim in TLV',
  publisher: 'Olim in TLV',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://olimintelav.com',
    title: 'Olim in TLV - Your Guide to Life in Tel Aviv',
    description: 'Connect, explore, and thrive as an oleh in Tel Aviv.',
    siteName: 'Olim in TLV',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Olim in TLV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olim in TLV - Your Guide to Life in Tel Aviv',
    description: 'Connect, explore, and thrive as an oleh in Tel Aviv.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


