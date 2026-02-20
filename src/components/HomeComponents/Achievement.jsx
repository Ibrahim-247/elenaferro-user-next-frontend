"use client";
import Container from "@/common/Container";
import { motion } from "framer-motion";

export default function Achievement({ data }) {
  const achivements = [
    { name: "Total Sales", value: data?.total_sales || 0 },
    { name: "List to Sold Ratio", value: data?.list_of_sold_ratio || 0 },
    { name: "Years in Real Estate", value: data?.years_in_real_estate || 0 },
  ];

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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
            {data?.title}
          </motion.h4>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-10 lg:mt-20"
        >
          {achivements?.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-1.5 text-center border-b-2 md:border-b-0 md:border-r-2 last:border-r-0 last:border-b-0 pb-10 md:pb-0"
            >
              <h5 className="text-4xl lg:text-7xl font-bold text-secondary">
                {item?.value}
              </h5>
              <p className="text-lg font-normal text-[#928B7C]">{item?.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
