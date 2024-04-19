import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "Homepagina",
};

export default async function IndexPage() {
  return (
    <>
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Link
            href={"/login"}
            className="rounded-2xl bg-gray-50 px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Paymind is currently in closed alpha.
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">
            Simplify your <span className="text-green">Payroll</span> with{" "}
            <span className="text-green">AI</span>
          </h1>
          <p className="w-full md:max-w-[80%] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
            Experience the future of payroll with Paymind. Our chat interface,
            powered by Generative AI, provides instant access to precise and
            up-to-date social law information.
          </p>
          <div className="space-x-4">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-green hover:bg-green-950"
              )}
            >
              Request Early Access
            </Link>
          </div>

          <Image
            src="/assets/Browser/browsere.svg"
            alt="Hero"
            className="md:w-2/3 h-full"
          />
          {/* <img src="/assets/Browser/mobile.svg" alt="Hero" className="w-2/3 h-full lg:hidden" /> */}
        </div>
      </section>
      <section
        id="features"
        className="space-y-6 bg-white py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="container flex flex-col gap-8">
          <div className="mx-auto flex flex-col items-center space-y-4 text-center">
            <span className="text-green-950 font-medium">Features</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">
              You can&apos;t know it all but Paymind can
            </h2>
            <p className="md:max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Whether you&apos;re calculating salaries, navigating complex
              regulations, or handling employee queries, Paymind is here to
              support you every step of the way.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-16 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg bg-background p-2">
              <div className="flex flex-col justify-between gap-2">
                <div className="block rounded-lg bg-yellow-200 w-fit p-4">
                  <Image
                    src="/assets/icons/lightning.svg"
                    alt="Efficiency"
                    className="w-8 h-8"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-xl">Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Say goodbye to time-consuming searches and confusion. With
                    Paymind, you can access accurate payroll information
                    instantly, saving you valuable time and effort.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-background p-2">
              <div className="flex flex-col justify-between gap-2">
                <div className="block rounded-lg bg-yellow-200 w-fit p-4">
                  <Image
                    src="/assets/icons/shield.svg"
                    alt="Efficiency"
                    className="w-8 h-8"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-xl">Reliable Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Trust in Paymind as your single source of truth for all
                    payroll-related queries. Our AI-powered assistant ensures
                    that you have access to the most accurate and up-to-date
                    information available.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-background p-2">
              <div className="flex flex-col justify-between gap-2">
                <div className="block rounded-lg bg-yellow-200 w-fit p-4">
                  <Image
                    src="/assets/icons/curve.svg"
                    alt="Efficiency"
                    className="w-8 h-8"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-xl">No Learning Curve</h3>
                  <p className="text-sm text-muted-foreground">
                    Say goodbye to tedious training sessions. Paymind boasts an
                    intuitive interface designed for seamless integration into
                    your existing workflow, eliminating the need for extensive
                    onboarding.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-background p-2">
              <div className="flex flex-col justify-between gap-2">
                <div className="block rounded-lg bg-yellow-200 w-fit p-4">
                  <Image
                    src="/assets/icons/refresh.svg"
                    alt="Up-to-date"
                    className="w-8 h-8"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-xl">Up-to-date</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay ahead of the curve with Paymind&apos;s commitment to
                    delivering the latest updates and insights in the field of
                    payroll management. Count on us to keep you informed and
                    empowered in an ever-evolving landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="FAQ" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="text-green-950 font-medium">FAQ</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            If anything was still unclear, you can find all the answers to your
            questions in our FAQ.
          </p>
          <Accordion type="single" className="w-full pt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-start">
                What is Paymind?
              </AccordionTrigger>
              <AccordionContent className="text-start">
                Paymind is your personal payroll assistant. We use AI to help
                you with your payroll administration by providing you with the
                most up-to-date information in an intiutive way.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-start">
                How do I get access?
              </AccordionTrigger>
              <AccordionContent className="text-start">
                We are currently in closed alpha. We only provide access to a
                select group of users selected by our team. You can request
                early access{" "}
                <Link href="/request-access" className="underline">
                  here
                </Link>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-start">
                Where do you get your information from?
              </AccordionTrigger>
              <AccordionContent className="text-start">
                We have a team of experts that keep our information up-to-date.
                By connecting to various verified sources (Staatsblad, RSZ, RVA,
                ...), we ensure that you always have the most accurate
                information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-start">
                How much does it cost?
              </AccordionTrigger>
              <AccordionContent className="text-start">
                Paymind is currently free to use for selected users. We are
                still in the early stages of development and are looking for
                feedback from our users.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
