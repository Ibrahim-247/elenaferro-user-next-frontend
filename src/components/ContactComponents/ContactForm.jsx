"use client";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useContactRequest } from "@/hooks/contact.api";
import { Spinner } from "../ui/spinner";
import { useEffect } from "react";

export default function ContactForm() {
  const contactMutation = useContactRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    contactMutation?.mutate(data);
  };

  useEffect(() => {
    if (contactMutation.isSuccess) {
      reset();
    }
  }, [contactMutation.isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {/* First Name */}
        <div>
          <Input
            className={`rounded-none border-[#979CA8] h-11 ${
              errors.first_name ? "border-red-500" : ""
            }`}
            placeholder="First Name"
            {...register("first_name", { required: "First name is required" })}
          />
          {errors.first_name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.first_name.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <Input
            className={`rounded-none border-[#979CA8] h-11 ${
              errors.last_name ? "border-red-500" : ""
            }`}
            placeholder="Last Name"
            {...register("last_name", { required: "Last name is required" })}
          />
          {errors.last_name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.last_name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Input
            type="email"
            className={`rounded-none border-[#979CA8] h-11 ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Input
            className={`rounded-none border-[#979CA8] h-11 ${
              errors.phone ? "border-red-500" : ""
            }`}
            placeholder="Phone Number"
            {...register("phone", {
              required: "Phone number is required",
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="col-span-2">
          <textarea
            placeholder="Your Message"
            className={`w-full col-span-2 p-4 border border-[#979CA8] focus:outline-0 ${
              errors.message ? "border-red-500" : ""
            }`}
            rows={4}
            {...register("message", {
              required: "Message is required",
            })}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          disabled={contactMutation.isPending}
          type="submit"
          className="rounded-none col-span-2 bg-secondary text-white hover:bg-secondary/90 h-11 mt-4 flex items-center gap-2"
        >
          Submit Form{" "}
          {contactMutation.isPending ? (
            <Spinner />
          ) : (
            <MoveRight className="size-6" />
          )}
        </Button>
      </div>
    </form>
  );
}
