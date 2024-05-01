// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import React, {  useTransition } from "react";
// import { useTolgee } from "@tolgee/react";
// import { usePathname, useRouter } from "@/navigation";
// import { ChevronDown } from "lucide-react";
// import { ALL_LOCALES } from "@/tolgee/shared";

// export function LanguagePicker() {
//   const tolgee = useTolgee(["language"]);
//   const locale = tolgee.getLanguage();
//   const router = useRouter();
//   const pathname = usePathname();
//   const [_, startTransition] = useTransition();

//   function changeLocale(locale: string) {
//     startTransition(() => {
//       router.replace(pathname, { locale: locale });
//     });
//   }
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="ghost"
//           className="hover:bg-transparent flex gap-1 hover:text-foreground/80"
//         >
//           {/* {currentLocale === "en" && "🇬🇧 EN"}
//           {currentLocale === "nl-BE" && "🇧🇪 BE"}
//           {currentLocale === "fr-FR" && "🇫🇷 FR"} */}
//           {locale === "nl-BE" && "🇧🇪 BE"}
//           {locale === "fr-FR" && "🇫🇷 FR"}
//           {locale === "en" && "🇬🇧 EN"}
//           <ChevronDown size={16} />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="">
//         <DropdownMenuGroup>
//           {ALL_LOCALES.map((locale) => (
//             <DropdownMenuItem key={locale} onClick={() => changeLocale(locale)}>
//                 {locale === "nl-BE" && "🇧🇪 BE"}
//                 {locale === "fr-FR" && "🇫🇷 FR"}
//                 {locale === "en" && "🇬🇧 EN"}
//             </DropdownMenuItem>
//           ))}

//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
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
        <span>{"🇬🇧 EN"}</span>
      </option>
      <option value="nl-BE">
        <span>{"🇧🇪 BE"}</span>
      </option>
      <option value="fr-FR">
        <span>{"🇫🇷 FR"}</span>
      </option>
    </select>
  );
};
