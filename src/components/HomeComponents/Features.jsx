"use client";
import Container from "@/common/Container";
import feature from "../../assets/feature.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features({ data }) {
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
    <div className="py-10 lg:py-16">
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
            className="text-lg font-medium text-secondary/80 font-montserrat uppercase tracking-wider"
          >
            {data?.sub_title}
          </motion.p>
          <motion.h4
            variants={itemVariants}
            className="text-4xl lg:text-5xl xl:text-6xl font-semibold font-cormorant leading-tight"
          >
            {data?.title || "FEATURED AREAS"}
          </motion.h4>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-16"
        >
          {data?.featured_area?.map((item, index) => (
            <motion.a
              key={index}
              href={`/search?area=${encodeURIComponent(item?.title || "default")}`}
              variants={itemVariants}
              transition={{ duration: 0.3 }}
              className="w-full h-80 lg:h-96 overflow-hidden relative cursor-pointer group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                <Image
                  src={item?.image || feature}
                  alt="feature"
                  width={600}
                  height={400}
                  unoptimized={true}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>
              <h5 className="text-2xl lg:text-3xl font-semibold uppercase absolute top-1/2 left-1/2 -translate-1/2 text-white pointer-events-none drop-shadow-2xl font-cormorant tracking-widest text-center w-full px-4">
                {item?.title}
              </h5>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
