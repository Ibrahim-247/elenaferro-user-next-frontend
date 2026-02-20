"use client";

import Container from "@/common/Container";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import aboutImg from "../../assets/about.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About({ data }) {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#F8F7F4] py-12 md:py-20 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <div className="max-w-full lg:max-w-200 w-full">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-semibold text-secondary tracking-widest"
            >
              {data?.sub_title}
            </motion.p>
            <motion.h4
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold font-cormorant mt-3 leading-tight"
            >
              {data?.title || "MEDILOCK REALTY"}
            </motion.h4>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-xl font-normal text-[#404A60] my-8 lg:my-14 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></motion.p>
            <motion.div variants={itemVariants}>
              <Button className="bg-secondary text-white rounded-none hover:bg-secondary/90 h-11 w-full sm:w-auto">
                SCHDULE CONSULTATION <MoveRight />
              </Button>
            </motion.div>
          </div>
          <motion.div
            variants={imageVariants}
            className="max-w-full lg:max-w-115 w-full h-80 md:h-107 overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src={data?.image || aboutImg}
              alt="aboutImg"
              width={460}
              height={428}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
