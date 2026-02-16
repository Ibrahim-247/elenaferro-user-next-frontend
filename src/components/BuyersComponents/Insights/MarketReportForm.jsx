"use client";
import Container from "@/common/Container";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Img from "../../../assets/report.png";
import { useContactRequest } from "@/hooks/contact.api";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import { MoveRight } from "lucide-react";

export default function MarketReportForm() {
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
    <Container>
      <div className="my-7 relative">
        <div className="max-w-135 w-full h-40 lg:h-180 overflow-hidden">
          <Image src={Img} alt="Img" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-207 w-full bg-white sm:absolute top-10 right-0 shadow-xl p-5 lg:p-12">
          <div>
            <h4 className="text-3xl font-bold text-secondary font-cormorant">
              Want a Detailed Market Report for Your Neighborhood?
            </h4>
            <p className="text-lg font-normal">
              Get weekly updates and insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 mt-8">
                {/*  Name */}
                <div className="space-y-1.5">
                  <h5 className="text-lg font-normal">Name</h5>
                  <Input
                    className={`rounded-none border-[#979CA8] h-11 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <h5 className="text-lg font-normal">Email</h5>
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
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Zip  */}
                <div className="space-y-1.5">
                  <h5 className="text-lg font-normal">ZIP Code</h5>
                  <Input
                    className={`rounded-none border-[#979CA8] h-11 ${
                      errors.zip ? "border-red-500" : ""
                    }`}
                    placeholder="Your Zip Code"
                    {...register("zip", {
                      required: "Zip code is required",
                    })}
                  />
                  {errors.zip && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.zip.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  disabled={contactMutation.isPending}
                  type="submit"
                  className="rounded-none col-span-2 w-full bg-secondary text-white hover:bg-secondary/90 h-11 mt-4 flex items-center gap-2"
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
          </div>
        </div>
      </div>
    </Container>
  );
}
