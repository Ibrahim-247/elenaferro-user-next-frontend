"use client";

import Container from "@/common/Container";
import { motion } from "framer-motion";

export default function SellerHeader() {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-[#F8F7F4] py-8 md:py-12">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center space-y-2 md:space-y-4 px-4"
        >
          <motion.h4
            variants={itemVariants}
            className="text-3xl md:text-5xl font-semibold font-cormorant leading-tight"
          >
            Start Your Home Selling Journey
          </motion.h4>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl font-medium font-cormorant"
          >
            Review the information below
          </motion.p>
        </motion.div>
      </Container>
    </div>
  );
}
