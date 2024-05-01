
import { MainNav } from "@/components/main-nav";
import { MarketingFooter } from "@/components/marketing-footer";

import { marketingConfig } from "@/config/marketing";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function LegalLayout({
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

      <MarketingFooter className="flex flex-1 items-center justify-center py-12 mx-6 md:mx-0 max-w-xl sm:max-w-2xl md:max-w-full"/>
    </div>
  );
}
