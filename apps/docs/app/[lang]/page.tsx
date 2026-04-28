import Link from 'next/link';

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const isChinese = lang === 'zh-CN';

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <div>
        <h1 className="text-3xl font-semibold tracking-normal">
          HOI4 Modding Tools
        </h1>
        <p className="mt-3 text-muted-foreground">
          {isChinese
            ? '面向 Hearts of Iron IV Mod 开发者的双语工具与资料索引。'
            : 'A bilingual catalog of tools and resources for Hearts of Iron IV mod development.'}
        </p>
      </div>
      <div>
        <Link
          className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
          href={`/${lang}/docs`}
        >
          {isChinese ? '进入中文文档' : 'Open English docs'}
        </Link>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh-CN' }];
}
