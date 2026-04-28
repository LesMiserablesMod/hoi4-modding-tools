import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { basePath, i18nUI } from '@/lib/layout.shared';

type LayoutProps = {
  params: Promise<{
    lang: string;
  }>;
  children: ReactNode;
};

export default async function RootLayout({ params, children }: LayoutProps) {
  const { lang } = await params;

  return (
    <RootProvider
      i18n={i18nUI.provider(lang)}
      search={{
        options: {
          type: 'static',
          api: `${basePath}/api/search`,
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
