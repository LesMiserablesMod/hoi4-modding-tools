import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

export const { staticGET: GET } = createFromSource(source, {
  localeMap: {
    en: {
      language: 'english',
    },
    'zh-CN': {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});
