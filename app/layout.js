import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'VIPER - Premium Custom Sportswear & Jerseys',
  description: 'Design and customize your own professional grade sportswear and jerseys. Unlimited customization, premium quality fabrics, and fast turnaround.',
  keywords: 'custom sportswear, custom jersey, custom team uniform, soccer jersey design, football jersey customizer, VIPER',
  metadataBase: new URL('https://viper.in'),
  openGraph: {
    title: 'VIPER - Premium Custom Sportswear & Jerseys',
    description: 'Design and customize your own professional grade sportswear and jerseys. Premium quality fabrics, and fast turnaround.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      { url: '/logoblack.png', media: '(prefers-color-scheme: light)' },
      { url: '/logowhite.png', media: '(prefers-color-scheme: dark)' },
    ],
  }
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
