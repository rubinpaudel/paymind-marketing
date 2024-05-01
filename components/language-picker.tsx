"use client";

import React, { ChangeEvent, useTransition } from "react";
import { useTolgee } from "@tolgee/react";
import { usePathname, useRouter } from "@/navigation";

export const LanguagePicker: React.FC = () => {
  const tolgee = useTolgee(["language"]);
  const locale = tolgee.getLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [_, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <select
      className="bg-transparent cursor-pointer"
      onChange={onSelectChange}
      value={locale}
    >
      <option value="en">
        {"🇬🇧 EN"}
      </option>
      <option value="nl-BE">
        {"🇧🇪 BE"}
      </option>
      <option value="fr-FR">
        {"🇫🇷 FR"}
      </option>
    </select>
  );
};
