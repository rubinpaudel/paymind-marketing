// server.tsx

import { useLocale } from 'next-intl';

import { TolgeeBase, ALL_LOCALES, getStaticData } from './shared';
import { createServerInstance } from '@tolgee/react/server';

export const { getTolgee, getTranslate, T } = createServerInstance({
  getLocale: useLocale,
  createTolgee: async (locale) =>
    TolgeeBase().init({
      // load all languages on the server
      staticData: await getStaticData(ALL_LOCALES),
      observerOptions: {
        fullKeyEncode: true,
      },
      language: locale,
      // using custom fetch to avoid aggressive caching
      fetch: async (input, init) => {
        const data = await fetch(input, { ...init, next: { revalidate: 0 } });
        return data;
      },
    }),
});