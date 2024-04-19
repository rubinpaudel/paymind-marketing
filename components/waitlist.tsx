import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const WaitlistSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(3, { message: "Email is required" }).max(255, {
    message: "Email is too long"
  }).email({ message: "Invalid email address" })
});

export const Waitlist = () => {
  const form = useForm<z.infer<typeof WaitlistSchema>>({
    resolver: zodResolver(WaitlistSchema),
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
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
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
          Join The Waitlist
        </Button>
      
      </form>
    </Form>
  );
};
