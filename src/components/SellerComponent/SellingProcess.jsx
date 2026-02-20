"use client";

import Container from "@/common/Container";
import procesImg from "../../assets/buyingProcess.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SellingProcess({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="py-12 md:py-20 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="relative flex flex-col lg:flex-row items-center"
        >
          <motion.div
            variants={cardVariants}
            className="lg:max-w-203 w-full bg-[#F8F7F4] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 p-6 md:p-12 border-l-4 border-l-secondary z-10 shadow-lg lg:shadow-none mb-8 lg:mb-0"
          >
            <h4 className="text-3xl md:text-5xl font-semibold font-cormorant leading-tight">
              {data?.title}
            </h4>
            <p className="text-xl md:text-3xl font-normal text-[#343E56] mt-3">
              {data?.sub_title || "Step to Selling "}
            </p>

            <p className="text-base md:text-xl font-normal my-6 md:my-12 leading-relaxed text-[#404A60]">
              {data?.description}
            </p>
            <Button className="bg-secondary text-white rounded-none hover:bg-secondary/90 h-11 px-6! w-full sm:w-auto">
              SEARCH FOR A HOME <MoveRight className="size-5 md:size-6" />
            </Button>
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="lg:ml-auto max-w-full lg:max-w-147 w-full h-80 md:h-125 lg:h-200 overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src={procesImg}
              alt="procesImg"
              className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
