import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skr.AI - AI Search Assistant',
  description: 'Intelligent AI-powered search with real-time web search and multi-language support',
  keywords: 'AI search, Base Mini App, artificial intelligence, search tools, machine learning',
  authors: [{ name: 'Skr.AI Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#007AFF',
  openGraph: {
    title: 'Skr.AI - AI Search Assistant',
    description: 'Intelligent AI-powered search with real-time web search and multi-language support',
    type: 'website',
    locale: 'en_US',
    url: 'https://skr-ai-miniapp.vercel.app',
    siteName: 'Skr.AI Mini App',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Skr.AI - AI Search Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skr.AI - AI Search Assistant',
    description: 'Intelligent AI-powered search with real-time web search and multi-language support',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Skr.AI" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Skr.AI" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}