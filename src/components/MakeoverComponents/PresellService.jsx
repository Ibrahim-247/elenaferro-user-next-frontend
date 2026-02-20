"use client";

import Image from "next/image";
import sellImg from "../../assets/sell.png";
import Container from "@/common/Container";
import { motion } from "framer-motion";

export default function PresellService() {
  const leftSideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <section className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="space-y-24">
            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold text-center font-cormorant"
            >
              Pre-Sale Improvement Service
            </motion.h2>

            {/* Block 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div 
                variants={leftSideVariants}
                className="max-w-[500px] w-full h-[300px] overflow-hidden rounded-xl mx-auto lg:mx-0"
              >
                <Image
                  src={sellImg}
                  alt="Deep Cleaning"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div variants={rightSideVariants} className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#B7A47C]">
                  Deep Cleaning & Decluttering
                </h3>
                <p className="text-[#404A60] leading-relaxed text-lg">
                  Deep cleaning and decluttering a home before listing it for
                  sale is essential to maximize its appeal to potential buyers.
                  A clean and clutter-free environment creates a positive first
                  impression, allowing buyers to envision themselves living in
                  the space.
                </p>
                <p className="text-[#404A60] leading-relaxed text-lg">
                  By presenting a well-maintained and organized home, sellers
                  can increase their chances of attracting offers and achieving
                  a quicker sale at a desirable price.
                </p>
              </motion.div>
            </motion.div>

            {/* Block 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={leftSideVariants} className="space-y-4 order-2 lg:order-1">
                <h3 className="text-2xl font-semibold text-[#B7A47C]">
                  Landscaping & Curb Appeal
                </h3>
                <p className="text-[#404A60] leading-relaxed text-lg">
                  Landscaping a home before listing it for sale is vital as it
                  enhances curb appeal. Well-maintained gardens, manicured
                  lawns, and thoughtfully placed plants can significantly
                  increase the attractiveness of a property.
                </p>
                <p className="text-[#404A60] leading-relaxed text-lg">
                  Investing in landscaping not only improves the overall
                  aesthetic of the home but also boosts its perceived value,
                  potentially leading to a faster sale and higher offers.
                </p>
              </motion.div>

              <motion.div 
                variants={rightSideVariants}
                className="max-w-[500px] w-full h-[300px] overflow-hidden rounded-xl order-1 lg:order-2 mx-auto lg:mx-0"
              >
                <Image
                  src={sellImg}
                  alt="Landscaping"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>

            {/* Block 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div 
                variants={leftSideVariants}
                className="max-w-[500px] w-full h-[300px] overflow-hidden rounded-xl mx-auto lg:mx-0"
              >
                <Image
                  src={sellImg}
                  alt="Repair and Maintenance"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div variants={rightSideVariants} className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#B7A47C]">
                  Repairs & Maintenance
                </h3>
                <p className="text-[#404A60] leading-relaxed text-lg">
                  Tackling necessary repairs and basic maintenance ensures the
                  home feels cared for and move-in ready. From fixing minor
                  leaks to touching up paint, these small details make a big
                  difference in how buyers perceive the quality of the home.
                </p>
                <p className="text-[#404A60] leading-relaxed text-lg">
                  A well-maintained home builds trust with potential buyers and
                  can help avoid issues during the home inspection process.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
