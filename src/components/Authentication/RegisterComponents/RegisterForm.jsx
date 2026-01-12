"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import google from "../../../assets/google.png";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/validators/loginSchema";
import { registerSchema } from "@/lib/validators/registerSchema";
import { useRegister } from "@/hooks/auth.api";
import { Spinner } from "@/components/ui/spinner";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //   hook form with zod validation
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      privacy_policy: false,
    },
  });

  const registerMutation = useRegister();

  const onSubmit = (data) => {
    registerMutation.mutate(data);
    console.log("Register Data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h4 className="text-4xl font-semibold mb-8">Create Your Account</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <h5 className="text-lg font-medium">Full Name</h5>
          <Input
            type="text"
            placeholder="Enter Your Full Name"
            className="bg-[#F5F6F7] py-6"
            {...register("full_name")}
          />
          {errors.full_name && (
            <p className="text-sm text-red-500">{errors.full_name.message}</p>
          )}
        </div>
        {/* Email */}
        <div className="space-y-2">
          <h5 className="text-lg font-medium">Email Address</h5>
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-[#F5F6F7] py-6"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <h5 className="text-lg font-medium">Password</h5>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-[#F5F6F7] py-6 pr-12"
              {...register("password")}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        {/* Confirm Password */}
        <div className="space-y-2">
          <h5 className="text-lg font-medium">Confirm Password</h5>

          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-[#F5F6F7] py-6 pr-12"
              {...register("password_confirmation")}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showConfirmPassword ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </div>

          {errors.password_confirmation && (
            <p className="text-sm text-red-500">
              {errors.password_confirmation.message}
            </p>
          )}
        </div>

        {/* Remember me */}
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={watch("privacy_policy")}
            onCheckedChange={(val) =>
              setValue("privacy_policy", Boolean(val), {
                shouldValidate: true,
              })
            }
          />
          <span>
            I agree to the <strong>Terms of Service</strong> and{" "}
            <strong>Privacy Policy</strong>
          </span>
        </label>

        {errors.privacy_policy && (
          <p className="text-sm text-red-500">
            {errors.privacy_policy.message}
          </p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={registerMutation?.isPending}
          className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-base h-11 flex gap-2"
        >
          Create Account
          {registerMutation?.isPending ? (
            <Spinner />
          ) : (
            <ArrowRight className="size-5" />
          )}
        </Button>

        {/* Signup */}
        <div className="text-lg text-center space-x-2">
          <span>Don't have an account?</span>
          <Link href="login" className="text-secondary underline">
            Login
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="bg-[#C1C4CC] h-px flex-1" />
          <span className="text-base font-semibold">Or</span>
          <div className="bg-[#C1C4CC] h-px flex-1" />
        </div>

        {/* Google Login */}
        <Button
          type="button"
          className="bg-transparent hover:bg-gray-50 border rounded-full text-primary w-full h-11 text-base flex gap-2"
        >
          <Image src={google} alt="google" className="w-5" />
          Continue with Google
        </Button>
      </form>
    </div>
  );
}
