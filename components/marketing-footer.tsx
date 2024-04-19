import * as React from "react";

// import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
// import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { marketingConfig } from "@/config/marketing";
// import { marketingFooterConfig } from "@/config/marketing";

export function MarketingFooter({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex flex-col justify-between items-center gap-4 py-10 bg-green-900 max-w-[64rem] rounded-xl">
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
          Whether you&apos;re calculating salaries, navigating complex
          regulations, or handling employee queries, Paymind is here to support
          you every step of the way.
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
