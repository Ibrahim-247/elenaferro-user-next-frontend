"use client";

import Container from "@/common/Container";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Consultation({ data }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="py-12 md:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="w-full flex flex-col items-center justify-center gap-6 md:gap-8 text-center px-4"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-secondary max-w-full lg:max-w-125 w-full leading-tight"
          >
            {data?.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-full lg:max-w-200 text-lg md:text-xl font-normal text-[#404A60] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data?.description || "" }}
          ></motion.p>
          <motion.div variants={itemVariants}>
            <Button className="rounded-none bg-secondary text-white hover:bg-secondary/90 h-11 px-8 w-full sm:w-auto">
              SCHDULE CONSULTATION <MoveRight className="size-5 md:size-6" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
