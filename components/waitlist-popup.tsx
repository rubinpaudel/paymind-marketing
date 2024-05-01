"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Waitlist } from "./waitlist";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useTranslate } from "@tolgee/react";

export function WaitlistPoupup({ buttonClass }: { buttonClass?: string }) {
    const {t} = useTranslate();
    const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            buttonVariants({ variant: "default", size: "default" }),
            "px-4",
            "bg-green hover:bg-green-950"
          )}
        >
            {t("actions.requestEarlyAccess.button")}

        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-yellow-200 border-none">
        <DialogHeader>
          <DialogTitle className="font-semibold font-heading text-2xl pb-3">
            {
              t("actions.requestEarlyAccess.title")
            }
          </DialogTitle>
          <DialogDescription className="text-regular">

            {
              t("actions.requestEarlyAccess.description")
            }
          </DialogDescription>
        </DialogHeader>
        <Waitlist cb={() => setOpen(false)}></Waitlist>
      </DialogContent>
    </Dialog>
  );
}
