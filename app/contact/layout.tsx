import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with VIPER for custom sportswear inquiries, bulk orders, and team jersey quotes. WhatsApp, email, or visit us in Hyderabad, India.',
  openGraph: {
    title: 'Contact Us | VIPER',
    description: 'Get in touch with VIPER for custom sportswear inquiries, bulk orders, and team jersey quotes.',
    url: 'https://shopviper.in/contact',
  },
  alternates: {
    canonical: 'https://shopviper.in/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
