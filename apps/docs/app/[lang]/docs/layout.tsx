import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';

type LayoutProps = {
  params: Promise<{
    lang: string;
  }>;
  children: ReactNode;
};

export default async function Layout({ params, children }: LayoutProps) {
  const { lang } = await params;

  return (
    <DocsLayout tree={source.getPageTree(lang)} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
