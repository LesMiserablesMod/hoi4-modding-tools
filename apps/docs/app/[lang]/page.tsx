type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const docsPath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? '/hoi4-modding-tools'}/${lang}/docs`;
  const isChinese = lang === 'zh-CN';

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-4 px-6 py-16">
      <meta httpEquiv="refresh" content={`0;url=${docsPath}`} />
      <h1 className="text-3xl font-semibold tracking-normal">
        HOI4 Modding Tools
      </h1>
      <p className="text-muted-foreground">
        {isChinese ? '正在进入文档。' : 'Redirecting to the documentation.'}
      </p>
      <p>
        <a className="underline" href={docsPath}>
          {isChinese ? '打开文档' : 'Open documentation'}
        </a>
      </p>
    </main>
  );
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh-CN' }];
}
