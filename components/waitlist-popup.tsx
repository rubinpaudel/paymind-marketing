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

export function WaitlistPoupup({ buttonClass }: { buttonClass?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            buttonVariants({ variant: "default", size: "default" }),
            "px-4",
            "bg-green hover:bg-green-950"
          )}
        >
            Request Early Access
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-semibold font-heading text-2xl pb-3">
            Request Early Access
          </DialogTitle>
          <DialogDescription className="text-regular">
           We are currently in closed alpha. Sign up to get early access.
          </DialogDescription>
        </DialogHeader>
        <Waitlist></Waitlist>
      </DialogContent>
    </Dialog>
  );
}
