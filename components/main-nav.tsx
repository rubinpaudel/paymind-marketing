"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { MainNavItem } from "@/types";
import { cn } from "@/lib/utils";

import { MobileNav } from "@/components/mobile-nav";
import { siteConfig } from "@/config/site";
import { X } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10 justify-between w-full ">
      <Link href="/" className="hidden items-center md:flex space-x-2">
        <Image
          src="/assets/xs/green-icon.svg"
          alt="Paymind"
          className="w-8 h-8 rounded-full"
        />
        <span className="hidden font-medium sm:inline-block font-heading text-xl">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <X />
        ) : (
          <>
            <Image
              src="/assets/xs/white-green-icon.svg"
              alt="Paymind"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-bold">{/* <X /> */}</span>
          </>
        )}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
      <nav className="inline-flex gap-4">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "px-4",
            "bg-green hover:bg-green-950"
          )}
        >
          Request Early Access
        </Link>
      </nav>
    </div>
  );
}
