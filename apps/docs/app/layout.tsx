import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './global.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/hoi4-modding-tools';

export const metadata: Metadata = {
  title: {
    default: 'HOI4 Modding Tools',
    template: '%s | HOI4 Modding Tools',
  },
  icons: {
    icon: [
      {
        url: `${basePath}/favicon.svg`,
        type: 'image/svg+xml',
      },
    ],
    shortcut: [`${basePath}/favicon.svg`],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
