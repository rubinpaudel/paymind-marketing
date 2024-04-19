import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const WaitlistSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(3, { message: "Email is required" })
    .max(255, {
      message: "Email is too long",
    })
    .email({ message: "Invalid email address" }),
});

interface WaitlistProps {
  cb: () => void;
}
export const Waitlist = ({ cb }: WaitlistProps) => {
  const form = useForm<z.infer<typeof WaitlistSchema>>({
    resolver: zodResolver(WaitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof WaitlistSchema>) => {
    const payload = {
      email: values.email,
      waitlist_id: 15994,
      referral_link: document.URL,
    };

    fetch("https://api.getwaitlist.com/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        cb();
        toast.success("You will be notified when you are granted access.");
      })
      .catch((error) => {
        cb();
        toast.error("Something went wrong. Please try again.");
      });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className=" py-6 px-4"
                  placeholder="Your Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "px-4",
            "bg-green hover:bg-green-950"
          )}
          type="submit"
        >
          Request Access
        </Button>
      </form>
    </Form>
  );
};
