import { defineI18nUI } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/hoi4-modding-tools';

export const i18nUI = defineI18nUI(i18n, {
  en: {
    displayName: 'English',
  },
  'zh-CN': {
    displayName: '简体中文',
    search: '搜索文档',
    toc: '本页目录',
    lastUpdate: '最后更新',
    previousPage: '上一页',
    nextPage: '下一页',
    chooseLanguage: '选择语言',
  },
});

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'HOI4 Modding Tools',
    },
    githubUrl: 'https://github.com/LesMiserablesMod/hoi4-modding-tools',
    i18n: true,
    themeSwitch: {
      enabled: false,
    },
  };
}
