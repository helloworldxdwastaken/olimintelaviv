import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Olim in TLV - Your Guide to Life in Tel Aviv',
  description: 'Connect, explore, and thrive as an oleh in Tel Aviv. Find housing, dating, university info, restaurants, and local tips.',
  keywords: ['Tel Aviv', 'Israel', 'Olim', 'Aliyah', 'Dating', 'Renting', 'University'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


