import type { Metadata } from "next";
import { Poppins, Space_Grotesk, Lexend_Deca } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { TolgeeNextProvider } from "@/tolgee/client";
import { ALL_LOCALES, getStaticData } from '@/tolgee/shared';

import "@/styles/globals.css";

const fontSans = Lexend_Deca({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Paymind",
  description: "Payroll for the modern world.",
};

export default async function RootLayout({
  children,
  params : {locale}
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  if (!ALL_LOCALES.includes(locale)) {
    notFound()
  };
  const locales = await getStaticData([locale]);
  
  return (
    <html suppressHydrationWarning className="scroll-smooth">
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <TolgeeNextProvider locale={locale} locales={locales}>
          <ThemeProvider attribute="class" defaultTheme={"light"} enableSystem>
            {children}

            <Toaster />
          </ThemeProvider>
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
