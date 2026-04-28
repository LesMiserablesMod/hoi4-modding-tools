import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '../..');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/hoi4-modding-tools';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  basePath,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: repoRoot,
  },
};

export default withMDX(config);
