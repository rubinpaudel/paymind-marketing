import Link from "next/link";

// import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { Separator } from "@/components/ui/separator";
import { marketingConfig } from "@/config/marketing";
// import { LocationBanner } from "@/components/location-banner";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-yellow">
        {/* <LocationBanner /> */}
      <header className="container z-40">
        <div className="w-full flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav}/>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}

      <MarketingFooter className="container flex items-center justify-center py-12"/>
    </div>
  );
}
