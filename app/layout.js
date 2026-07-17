import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://shopviper.in'),
  title: {
    default: 'VIPER - Premium Custom Sportswear & Jerseys',
    template: '%s | VIPER',
  },
  description: 'Design and customize your own professional grade sportswear and jerseys. Unlimited customization, premium quality fabrics, and fast turnaround. Shop custom team kits for football, cricket, kabaddi, basketball and more.',
  keywords: ['custom sportswear', 'custom jersey', 'custom team uniform', 'soccer jersey design', 'football jersey customizer', 'VIPER', 'shopviper', 'custom kits', 'team wear India'],
  authors: [{ name: 'VIPER' }],
  creator: 'VIPER',
  publisher: 'VIPER',
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
  openGraph: {
    title: 'VIPER - Premium Custom Sportswear & Jerseys',
    description: 'Design and customize your own professional grade sportswear and jerseys. Premium quality fabrics, unlimited customization, and fast turnaround.',
    url: 'https://shopviper.in',
    siteName: 'VIPER',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/hero_players.png',
        width: 1200,
        height: 630,
        alt: 'VIPER Custom Sportswear',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIPER - Premium Custom Sportswear & Jerseys',
    description: 'Design and customize your own professional grade sportswear and jerseys. Premium quality fabrics, unlimited customization.',
    images: ['/images/hero_players.png'],
  },
  alternates: {
    canonical: 'https://shopviper.in',
  },
  icons: {
    icon: [
      { url: '/logoblack.png', media: '(prefers-color-scheme: light)' },
      { url: '/logowhite.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
