import '~/styles/globals.css';
import { cn } from '~/lib/utils';
import localFont from 'next/font/local';

import { GeistSans } from 'geist/font/sans';
const dune = localFont({
  src: '../../public/Dune_Rise.ttf',
  variable: '--font-dune',
});

const grotesque = localFont({
  src: '../../public/Rebond Grotesque Bold.otf',
  variable: '--font-grotesque',
});

import { env } from '~/env';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_METADATA_BASE_URL),
  title: 'Kratuj | Transforming Tomorrow',
  description: `Kratuj: NIT Agartala's premier annual tech conclave. North East India's largest event. Join us for innovation and inspiration!"`,
  applicationName: 'Kratuj',
  keywords: [
    'NIT Agartala',
    'Techfest',
    'Tech Conclave',
    'College Clubs',
    'College Events',
    'Gymkhana Technical',
    'BTC',
    'IIIT Agartala',
  ],
  creator: 'Vedant Chainani',
  publisher: 'Gymkhana Technical',
  icons: [
    { rel: 'icon', url: '/logo.png' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
  manifest: '/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: 'Kratuj | Transforming Tomorrow',
    description: `Kratuj: NIT Agartala's premier annual tech conclave. North East India's largest event. Join us for innovation and inspiration!"`,
    creator: '@Envoy_1084',
    site: '@Envoy_1084',
    images: [
      {
        url: '/og.png',
        alt: 'Kratuj OG Image',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'Kratuj | Transforming Tomorrow',
    description: `Kratuj: NIT Agartala's premier annual tech conclave. North East India's largest event. Join us for innovation and inspiration!"`,
    type: 'website',
    locale: 'en_US',
    url: 'https://kratuj.gymkhananita.com',
    images: [
      {
        url: '/og.png',
        alt: 'Kratuj OG Image',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
};

import { Footer, Navbar } from '~/components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!dark'>
      <body
        className={cn(
          'bg-background text-white',
          GeistSans.className,
          dune.variable,
          grotesque.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
