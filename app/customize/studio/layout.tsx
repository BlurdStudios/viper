import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Studio',
  description: 'Use the VIPER design studio to customize your team jersey in real time. Try templates, colors, patterns, upload logos, and preview your design instantly.',
  openGraph: {
    title: 'Design Studio | VIPER',
    description: 'Customize your team jersey in real time with the VIPER design studio.',
    url: 'https://shopviper.in/customize/studio',
  },
  alternates: {
    canonical: 'https://shopviper.in/customize/studio',
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
