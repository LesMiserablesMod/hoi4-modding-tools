import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <div>
        <h1 className="text-3xl font-semibold tracking-normal">
          HOI4 Modding Tools
        </h1>
        <p className="mt-3 text-muted-foreground">
          A bilingual catalog of tools and resources for Hearts of Iron IV mod
          development.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
          href="/en/docs"
        >
          English
        </Link>
        <Link
          className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
          href="/zh-CN/docs"
        >
          简体中文
        </Link>
      </div>
    </main>
  );
}
