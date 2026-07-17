import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customize Your Jersey',
  description: 'Design your dream jersey with our interactive customizer. Pick templates, colors, patterns, add your logo, team name and number. Premium custom sportswear built for champions.',
  openGraph: {
    title: 'Customize Your Jersey | VIPER',
    description: 'Design your dream jersey with our interactive customizer. Pick templates, colors, patterns, and more.',
    url: 'https://shopviper.in/customize',
  },
  alternates: {
    canonical: 'https://shopviper.in/customize',
  },
};

export default function CustomizeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
