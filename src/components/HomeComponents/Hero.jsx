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
      style={{ backgroundImage: `url(${data?.image || heroBg})` }}
      className="h-130 lg:h-175 w-full bg-cover bg-center"
    >
      <Container>
        xxxx
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white flex flex-col items-center justify-center h-130 lg:h-175 space-y-3 lg:space-y-5"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-8xl text-center font-semibold font-cormorant uppercase"
          >
            {data?.title || "Title"}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-4xl font-light uppercase"
          >
            {data?.sub_title || "Sub Title"}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-7 mt-5"
          >
            <Link href="/search" className="w-full">
              <Button className="bg-secondary text-white hover:bg-secondary/90 w-full text-lg font-light h-11 rounded-none px-7!">
                SEARCH HOMES <GoArrowRight className="size-6" />
              </Button>
            </Link>

            <Link href="/contact" className="w-full">
              <Button
                variant="outline"
                className="text-white! hover:bg-secondary w-full bg-transparent text-lg font-light h-11 rounded-none px-7!"
              >
                GET IN TOUCH <GoArrowRight className="size-6" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
