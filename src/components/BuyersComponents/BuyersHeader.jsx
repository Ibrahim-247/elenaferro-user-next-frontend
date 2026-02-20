"use client";

import Container from "@/common/Container";
import { motion } from "framer-motion";
import React from "react";

export default function BuyersHeader() {
  return (
    <div className="py-8 md:py-12 bg-[#F8F7F4]">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-center font-cormorant leading-tight px-4"
        >
          Start Your Homebuying Journey
        </motion.h2>
      </Container>
    </div>
  );
}
