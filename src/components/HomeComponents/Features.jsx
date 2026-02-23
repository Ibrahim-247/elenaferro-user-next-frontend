"use client";

import Container from "@/common/Container";
import feature from "../../assets/feature.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features({ data }) {
  console.log(data);

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="py-12 lg:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-3 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-xl font-normal text-secondary"
          >
            {data?.sub_title}
          </motion.p>
          <motion.h4
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-semibold font-cormorant"
          >
            {data?.title || "FEATURED AREAS"}
          </motion.h4>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16"
        >
          {data?.featured_area?.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-75 overflow-hidden relative cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <Image
                  src={feature}
                  alt="feature"
                  width={500}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h5 className="text-xl font-normal uppercase absolute top-1/2 left-1/2 -translate-1/2 text-white pointer-events-none drop-shadow-lg">
                {item?.title}
              </h5>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
