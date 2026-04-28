# Docs

This is the Fumadocs documentation site for HOI4 Modding Tools.

It follows the official Fumadocs Next.js setup with `fumadocs-mdx` as the
content compiler:

- `source.config.ts` configures the Fumadocs content source.
- `lib/source.ts` adapts generated content collections for Fumadocs.
- `app/[lang]/docs` contains the localized documentation layout and page route.
- `app/api/search/route.ts` provides static document search.
- `content/docs` contains Markdown documentation pages. Use `.md` by default;
  reserve `.mdx` only for pages that need JSX components.

## Development

From the repository root:

```bash
npm run docs:dev
```

From this directory:

```bash
npm run dev
```

Open http://localhost:3000/hoi4-modding-tools/en/docs for English or http://localhost:3000/hoi4-modding-tools/zh-CN/docs for Simplified Chinese.

The site is configured with `basePath: /hoi4-modding-tools` so it can be deployed to GitHub Pages at:

```text
https://<owner>.github.io/hoi4-modding-tools/
```

The default dev server uses webpack with source maps disabled to reduce memory usage on Windows. If you specifically want Turbopack, run:

```bash
npm run docs:dev:turbo
```

To remove local Next.js build and dev cache:

```bash
npm run docs:clean
```
