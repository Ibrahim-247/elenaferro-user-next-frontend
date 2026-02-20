"use client";

import Container from "@/common/Container";
import heroBg from "../assets/hero_bg.png";
import { motion } from "framer-motion";

export default function CommonBanner({ subtitle, title, banner_img }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      style={{ backgroundImage: `url(${banner_img || heroBg?.src})` }}
      className="h-[50vh] md:h-175 w-full bg-cover bg-center"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white flex flex-col-reverse items-center justify-center h-[50vh] md:h-175 gap-4 md:gap-6 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-semibold font-cormorant uppercase leading-tight"
          >
            {title ?? "MEDLOCK REALTY"}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-4xl font-light uppercase tracking-[0.2em]"
          >
            {subtitle ?? "THE BETTER BROKERAGE"}
          </motion.p>
        </motion.div>
      </Container>
    </div>
  );
}
