"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/common/Container";
import { motion } from "framer-motion";

export default function SellingGuideForm() {
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
            How to Sell your home for top dollar Guide
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-[#2F3A5F] font-medium mb-6 uppercase tracking-wider"
          >
            Get Your Free Seller's Guide Today!
          </motion.p>

          {/* Description */}
          <motion.div 
            variants={itemVariants}
            className="space-y-5 text-[#2F3A5F] leading-relaxed mb-10 text-lg"
          >
            <p>
              Selling your home can be a complex and emotional process. That's why
              we’ve created a comprehensive seller's guide to help you navigate
              the process with ease. Whether you' re a first-time seller or a
              seasoned pro, our guide is packed with valuable information that
              will help you make informed decisions every step of the way.
            </p>
            <p>
              To get your free copy of our seller’s guide, simply fill out the
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="First Name" className="h-12 bg-white" />
                  <Input placeholder="Last Name" className="h-12 bg-white" />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="h-12 bg-white"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-12 bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-[#9A9483] text-white hover:bg-[#8A8575] text-base tracking-wide uppercase transition-all duration-300"
                >
                  Download Guide
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
