import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { WaitlistPoupup } from "@/components/waitlist-popup";
import { getTranslate } from "@/tolgee/server";

export const metadata = {
  title: "Paymind - AI powered payroll assistant",
  description:
    "Paymind is your personal payroll assistant. We use AI to help you with your payroll administration by providing you with the most up-to-date information in an intiutive way.",
};

export default async function IndexPage() {
  const t = await getTranslate();
  return (
    <>
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Link
            href={"/login"}
            className="rounded-2xl bg-gray-50 px-4 py-1.5 text-sm font-medium"
            target="_blank"
            dangerouslySetInnerHTML={{ __html: t("hero.banner") }}
          ></Link>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">
            {/* Simplify your <span className="text-green">Payroll</span> with{" "}
            <span className="text-green">AI</span> */}

            {t("hero.title")}

          </h1>
          <p className="w-full md:max-w-[80%] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
            {t("hero.description")}
          </p>
          <div className="space-x-4">
            <WaitlistPoupup></WaitlistPoupup>
          </div>

          <Image
            src="/assets/Browser/browser.svg"
            alt="Picture of the author"
            priority
            width={960}
            height={615}
          />
        </div>
      </section>
      <section
        id="features"
        className="space-y-6 bg-white py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="container flex flex-col gap-8">
          <div className="mx-auto flex flex-col items-center space-y-4 text-center">
            <span className="text-green-950 font-medium">
              {t("features.sectionTitle")}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">
              {t("features.title")}
            </h2>
            <p className="md:max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t("features.description")}
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-16 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg bg-background p-2">
              <div className="flex flex-col justify-between gap-2">
                <div className="block rounded-lg bg-yellow-200 w-fit p-4">
                  <Image
                    src="/assets/icons/lightning.svg"
                    width={32}
                    height={32}
                    alt="Efficiency"
                    className="w-8 h-8"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-xl">{t("features.efficiency")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("features.efficiency.description")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-background p-2">
              <div className="flex flex-col justify-between gap-2">
                <div className="block rounded-lg bg-yellow-200 w-fit p-4">
                  <Image
                    src="/assets/icons/shield.svg"
                    width={32}
                    height={32}
                    alt="Reliable Information"
                    className="w-8 h-8"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-xl">
                    {t("features.reliableInformation")}
                    </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("features.reliableInformation.description")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-background p-2">
              <div className="flex flex-col justify-between gap-2">
                <div className="block rounded-lg bg-yellow-200 w-fit p-4">
                  <Image
                    src="/assets/icons/curve.svg"
                    width={32}
                    height={32}
                    alt="Learning Curve"
                    className="w-8 h-8"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-xl">
                    {t("features.learningCurve")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("features.learningCurve.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-background p-2">
              <div className="flex flex-col justify-between gap-2">
                <div className="block rounded-lg bg-yellow-200 w-fit p-4">
                  <Image
                    src="/assets/icons/refresh.svg"
                    width={32}
                    height={32}
                    alt="Up-to-date"
                    className="w-8 h-8"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-xl">
                    {t("features.upToDate")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("features.upToDate.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="FAQ" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="text-green-950 font-medium">
            {t("faq.sectionTitle")}
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            {t("faq.title")}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {t("faq.description")}
          </p>
          <Accordion type="single" className="w-full pt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-start">
                {t("faq.items.whatIsPaymind")}
              </AccordionTrigger>
              <AccordionContent className="text-start">
              
                {t("faq.items.whatIsPaymind.description")}

              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-start">
                {t("faq.items.howToGetAccess")}
              </AccordionTrigger>
              <AccordionContent className="text-start">
                {t("faq.items.howToGetAccess.description")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-start">
                {t("faq.items.howIsItUpToDate")}
              </AccordionTrigger>
              <AccordionContent className="text-start">
                {t("faq.items.howIsItUpToDate.description")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-start">
                {t("faq.items.howMuchDoesItCost")}
              </AccordionTrigger>
              <AccordionContent className="text-start">
                {t("faq.items.howMuchDoesItCost.description")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
