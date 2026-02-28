"use client";

import Container from "@/common/Container";
import { motion } from "framer-motion";

export default function Different({ data }) {
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
    <div className="py-12 md:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-10 md:mb-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-normal text-secondary tracking-widest font-montserrat"
          >
            {data?.title || "WE ARE"}
          </motion.p>
          <motion.h4
            variants={itemVariants}
            className="text-4xl md:text-6xl font-semibold font-cormorant mt-3"
          >
            {data?.sub_title || "DIFFERENT"}
          </motion.h4>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {data?.different_items?.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[#EDEAE0] p-6 md:p-8 transition-shadow hover:shadow-lg duration-300"
            >
              <h4 className="text-5xl md:text-6xl font-bold text-secondary mb-4 md:mb-6">
                0{index + 1}
              </h4>
              <h2 className="text-2xl md:text-3xl font-semibold font-cormorant leading-tight">
                {item?.sub_title}
              </h2>
              <p className="text-base md:text-lg font-normal text-[#404A60] mt-4 leading-relaxed line-clamp-10">
                {item?.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
