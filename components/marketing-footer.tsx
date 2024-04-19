import * as React from "react";

// import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
// import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
// import { marketingFooterConfig } from "@/config/marketing";

export function MarketingFooter({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex flex-col justify-between items-center gap-4 py-10 bg-green-900 max-w-[64rem] rounded-xl">
          <div className="flex gap-2 items-center justify-center">
            <img src="/assets/xs/white-green-icon.svg" alt="Paymind" className="w-8 h-8 rounded-full" />
            <h1 className="text-2xl text-white text-center font-medium font-heading">
              Paymind
            </h1>
          </div>

          <p className="text-sm text-white text-center px-2 md:w-2/3 font-medium">
            Whether you're calculating salaries, navigating complex regulations, or handling employee queries, Paymind is here to support you every step of the way.
          </p>

            {/* Links */}
            <div className="flex items-center justify-center gap-2">
                <Link
                    href="/login"
                    className={cn(
                        buttonVariants({variant: "link", size: "sm"}),
                        "text-white"
                    )}
                >
                    Features
                </Link>
                <Link
                    href="/login"
                    className={cn(
                        buttonVariants({variant: "link", size: "sm"}),
                        "text-white"
                    )}
                >
                    FAQ
                </Link>
                <Link
                    href="/login"
                    className={cn(
                        buttonVariants({variant: "link", size: "sm"}),
                        "text-white"
                    )}
                >
                    Contact
                </Link>
            </div>


        {/* {marketingFooterConfig.map((item) => (
          <div key={item.title} className="space-y-3">
            <h4 className="text-base font-medium">{item.title}</h4>
            <ul className="space-y-3">
              {item.items.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    target={link?.external ? "_blank" : undefined}
                    rel={link?.external ? "noreferrer" : undefined}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))} */}

      </div>
    </footer>
  );
}
