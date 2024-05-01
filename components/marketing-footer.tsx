import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { marketingConfig } from "@/config/marketing";
import { getTranslate } from "@/tolgee/server";

export async function MarketingFooter({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const t = await getTranslate();
  return (
    <footer className={cn(className)}>
      <div className="flex flex-col justify-between items-center gap-4 py-10 bg-green-900 rounded-xl">
        <div className="flex gap-2 items-center justify-center">
          <Image
            src="/assets/xs/white-green-icon.svg"
            alt="Paymind"
            className="w-8 h-8 rounded-full"
            width={32}
            height={32}
          />
          <h1 className="text-2xl text-white text-center font-medium font-heading">
            Paymind
          </h1>
        </div>

        <p className="text-sm text-white text-center px-2 md:w-2/3 font-medium">
          {t("footer.description")}
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-2">
          {marketingConfig.mainNav.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "link", size: "sm" }),
                "text-white"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>


      </div>
    </footer>
  );
}
