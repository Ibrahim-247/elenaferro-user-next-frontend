"use client";

import Container from "@/common/Container";
import before from "../../assets/before.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Transformation() {
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
    <div className="py-20">
      <Container>
        <div>
          <motion.h5
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold font-cormorant text-center"
          >
            See the Transformation: Before & After
          </motion.h5>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="gap-8 grid grid-cols-1 md:grid-cols-2 mt-16"
          >
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full grid grid-cols-2 gap-3 h-48 md:h-62 overflow-hidden">
                  <div className="relative">
                    <div className="text-xs font-normal bg-white/60 absolute py-1 px-4 rounded-lg top-4 left-4 z-10">
                      Before
                    </div>
                    <Image
                      src={before}
                      alt="before"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative">
                    <div className="text-xs font-normal bg-white/60 absolute py-1 px-4 rounded-lg top-4 left-4 z-10">
                      After
                    </div>
                    <Image
                      src={before}
                      alt="before"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 space-y-2 border border-t-0">
                  <div className="flex items-center justify-between text-base md:text-xl font-medium">
                    <h4>As-Is Value</h4>
                    <span>$579.000</span>
                  </div>
                  <div className="flex items-center justify-between text-base md:text-xl font-medium">
                    <h4>Project Cost</h4>
                    <span>$147.587</span>
                  </div>
                  <div className="flex items-center justify-between text-base md:text-xl font-medium">
                    <h4>Sale Price</h4>
                    <span>$1023.547</span>
                  </div>
                  <div className="flex items-center justify-between text-base md:text-xl font-medium text-secondary">
                    <h4>Profit</h4>
                    <span>$320.127</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
