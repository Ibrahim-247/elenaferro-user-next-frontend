"use client";

import Container from "@/common/Container";
import heroBg from "../../assets/hero_bg.png";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero({ data }) {
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
      style={{ backgroundImage: `url(${data?.image || heroBg?.src})` }}
      className="h-130 lg:h-175 w-full bg-cover bg-center"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white flex flex-col items-center justify-center min-h-130 lg:min-h-175 py-12 lg:py-20 space-y-3"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl text-center font-semibold font-cormorant uppercase"
          >
            {data?.title || "Title"}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl font-light uppercase tracking-widest text-[#F8F7F4]/90"
          >
            {data?.sub_title || "Sub Title"}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 mt-8"
          >
            <Link href="/search" className="w-full sm:w-auto">
              <Button className="bg-secondary text-white hover:bg-secondary/90 w-full text-sm sm:text-base font-medium h-10 sm:h-12 rounded-none px-8!">
                SEARCH HOMES <GoArrowRight className="ml-2 size-5" />
              </Button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="text-white! border-white hover:bg-white hover:text-black! w-full bg-transparent text-sm sm:text-base font-medium h-10 sm:h-12 rounded-none px-8!"
              >
                GET IN TOUCH <GoArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
