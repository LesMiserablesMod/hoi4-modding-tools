const docsPath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? '/hoi4-modding-tools'}/zh-CN/docs`;

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-4 px-6 py-16">
      <meta httpEquiv="refresh" content={`0;url=${docsPath}`} />
      <h1 className="text-3xl font-semibold tracking-normal">
        HOI4 Modding Tools
      </h1>
      <p className="text-muted-foreground">
        Redirecting to the documentation.
      </p>
      <p>
        <a className="underline" href={docsPath}>
          Open documentation
        </a>
      </p>
    </main>
  );
}
