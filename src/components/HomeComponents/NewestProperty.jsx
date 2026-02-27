"use client";

import Container from "@/common/Container";
import PropertyCard from "@/common/PropertyCard";
import React from "react";
import { motion } from "framer-motion";

export default function NewestProperty() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="newest-properties" className="bg-[#F8F7F4] py-12 lg:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-3 text-center"
        >
          <motion.h4
            variants={itemVariants}
            className="text-xl font-normal text-secondary"
          >
            JUST LISTED
          </motion.h4>
          <motion.p
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-semibold font-cormorant"
          >
            NEWEST PROPERTIES
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-10 lg:my-14"
        >
          {[...Array(3)].map((_, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PropertyCard />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
