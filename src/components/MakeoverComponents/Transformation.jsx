"use client";

import Container from "@/common/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import iamgeOne from "../../assets/6-New-Site-Case-Study-Before-14-768x512.jpg";
import iamgeTwo from "../../assets/7-New-Site-Case-Study-After-8-1536x1024.jpg";
import iamgeThree from "../../assets/Lofty-Point-Bathroom-Before-768x512.jpg";
import iamgeFour from "../../assets/Lofty-Point-Bathroom-After-1536x1024.jpg";
import iamgeFive from "../../assets/Carvel-Bethesda-living-area-before-768x512.jpg";
import iamgeSix from "../../assets/Carvel-Bethesda-living-area-After-1536x1024.jpg";
import iamgeSeven from "../../assets/Scott-Dr-Exterior-before-768x512.jpg";
import iamgeEight from "../../assets/Scott-Drive-exterior-after-1536x1024.jpg";

const projectData = [
  {
    asIsValue: "$600,000",
    projectCost: "$138,207",
    salePrice: "$783,000",
    profit: "$44,793",
    beforeImage: iamgeOne,
    afterImage: iamgeTwo,
  },
  {
    asIsValue: "$659,000",
    projectCost: "$137,788",
    salePrice: "$979,775",
    profit: "$182,987",
    beforeImage: iamgeThree,
    afterImage: iamgeFour,
  },
  {
    asIsValue: "$659,000",
    projectCost: "$137,788",
    salePrice: "$979,775",
    profit: "$182,987",
    beforeImage: iamgeFive,
    afterImage: iamgeSix,
  },
  {
    asIsValue: "$450,000",
    projectCost: "$47,606",
    salePrice: "$579,000",
    profit: "$81,394",
    beforeImage: iamgeSeven,
    afterImage: iamgeEight,
  },
];

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
            {projectData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="w-full grid grid-cols-2 gap-3 h-48 md:h-62 overflow-hidden">
                  <div className="relative">
                    <div className="text-xs font-normal bg-white/60 absolute py-1 px-4 rounded-lg top-4 left-4 z-10">
                      Before
                    </div>
                    <Image
                      src={item.beforeImage}
                      alt="before"
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative">
                    <div className="text-xs font-normal bg-white/60 absolute py-1 px-4 rounded-lg top-4 left-4 z-10">
                      After
                    </div>
                    <Image
                      src={item.afterImage}
                      alt="after"
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-2 border border-t-0">
                  <div className="flex items-center justify-between text-base md:text-xl font-medium">
                    <h4>As-Is Value</h4>
                    <span>{item.asIsValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-base md:text-xl font-medium">
                    <h4>Project Cost</h4>
                    <span>{item.projectCost}</span>
                  </div>
                  <div className="flex items-center justify-between text-base md:text-xl font-medium">
                    <h4>Sale Price</h4>
                    <span>{item.salePrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-base md:text-xl font-medium text-secondary">
                    <h4>Profit</h4>
                    <span>{item.profit}</span>
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
