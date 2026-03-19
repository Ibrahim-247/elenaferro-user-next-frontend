"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/common/Container";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function HomeBuyingGuideForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      // Trigger native download
      const link = document.createElement("a");
      link.href = "/pdf/Medlock%20Realty%20Buyer's%20Guide%202.pdf";
      link.download = "Medlock_Realty_Buyers_Guide.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#F9F8F5] py-20 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif text-[#9A9483] mb-3"
          >
            Our 6 Steps to Home-Buying Guide
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[#2F3A5F] font-medium mb-6 uppercase tracking-wider"
          >
            Get Your Free Buyer's Guide Today!
          </motion.p>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="space-y-5 text-[#2F3A5F] leading-relaxed mb-10 text-lg"
          >
            <p>
              Buying a home can be an exciting but daunting experience. That’s
              why we’ve created a comprehensive buyer’s guide to help you
              navigate the process with ease. Whether you’re a first-time buyer
              or a seasoned pro, our guide is packed with valuable information
              that will help you make informed decisions every step of the way.
            </p>
            <p>
              To get your free copy of our buyer’s guide, simply fill out the
              form below. Once you submit your information, we’ll send the guide
              straight to your email inbox. It’s that easy!
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            variants={itemVariants}
            className="border-none shadow-none bg-transparent"
          >
            <div className="p-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="First Name"
                      className={`h-12 bg-white ${errors.first_name ? "border-red-500" : ""}`}
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      className={`h-12 bg-white ${errors.last_name ? "border-red-500" : ""}`}
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.last_name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className={`h-12 bg-white ${errors.email ? "border-red-500" : ""}`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className={`h-12 bg-white ${errors.phone ? "border-red-500" : ""}`}
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#9A9483] text-white hover:bg-[#8A8575] text-base tracking-wide uppercase transition-all duration-300"
                >
                  {isSubmitting ? "Submitting..." : "Download Guide"}
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
