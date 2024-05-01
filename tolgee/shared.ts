// shared.ts

import { DevTools, Tolgee, FormatSimple, BackendFetch } from "@tolgee/web";

export const ALL_LOCALES = ["nl-BE", "fr-FR", "en"];
const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export const DEFAULT_LOCALE = "nl-BE";

export async function getStaticData(languages: string[]) {
  const result: Record<string, any> = {};
  for (const lang of languages) {
    result[lang] = (await import(`../i18n/${lang}.json`)).default;
  }
  return result;
}

export function TolgeeBase() {
  return Tolgee()
    .use(FormatSimple())
    .use(DevTools())
    .use(
      BackendFetch({
        prefix: "https://cdn.tolg.ee/ccea17a042a6726a9c146d0c30142bde",
      })
    )
    .updateDefaults({
      apiKey,
      apiUrl,
      fallbackLanguage: "en",
      staticData: {
        "nl-BE": require("../i18n/nl-BE.json"),
        "fr-FR": require("../i18n/fr-FR.json"),
        "en": require("../i18n/en.json"),
      }
    });
}
