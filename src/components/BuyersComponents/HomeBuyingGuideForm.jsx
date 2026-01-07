"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/common/Container";

export default function HomeBuyingGuideForm() {
  return (
    <section className="w-full bg-[#F9F8F5] py-20">
      <Container>
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-serif text-[#9A9483] mb-3">
          Our 6 Steps to Home-Buying Guide
        </h1>
        <p className="text-[#2F3A5F] font-medium mb-6">
          Get Your Free Buyer's Guide Today!
        </p>

        {/* Description */}
        <div className="space-y-5 text-[#2F3A5F] leading-relaxed mb-10">
          <p>
            Buying a home can be an exciting but daunting experience. That’s why
            we’ve created a comprehensive buyer’s guide to help you navigate the
            process with ease. Whether you’re a first-time buyer or a seasoned
            pro, our guide is packed with valuable information that will help
            you make informed decisions every step of the way.
          </p>
          <p>
            To get your free copy of our buyer’s guide, simply fill out the form
            below. Once you submit your information, we’ll send the guide
            straight to your email inbox. It’s that easy!
          </p>
        </div>

        {/* Form Card */}
        <div className="border-none shadow-none bg-transparent">
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
                className="w-full h-14 bg-[#9A9483] text-white hover:bg-[#8A8575] text-base tracking-wide"
              >
                Download Guide
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
