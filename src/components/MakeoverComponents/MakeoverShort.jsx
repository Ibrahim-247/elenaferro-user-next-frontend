"use client";

import Container from "@/common/Container";
import {
  Lightbulb,
  Map,
  Expand,
  UserCheck,
  Activity,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lightbulb,
    title: "Expert advice on updates",
    description:
      "Our team provides comprehensive, up-to-date recommendations tailored to your specific project needs, ensuring you make informed decisions every step of the way.",
  },
  {
    icon: Map,
    title: "Free, same-day estimates",
    description:
      "Get accurate and transparent cost breakdowns for your project quickly, with no hidden fees and a commitment to prompt service.",
  },
  {
    icon: Expand,
    title: "No project-size minimum or maximum",
    description:
      "Whether your project is large or small, we handle it all with the same dedication and high-quality standards, adapting to your unique requirements.",
  },
  {
    icon: UserCheck,
    title: "Dedicated full-time project manager",
    description:
      "Benefit from a single point of contact overseeing your project from start to finish, ensuring seamless communication and efficient execution.",
  },
  {
    icon: Activity,
    title: "Real-time updates",
    description:
      "Stay informed with continuous progress reports and immediate notifications, giving you peace of mind throughout the project lifecycle.",
  },
  {
    icon: Package,
    title: "High-quality materials in stock",
    description:
      "We utilize only the best materials, readily available from our extensive inventory, guaranteeing durability and excellence in every aspect of your project.",
  },
];

export default function MakeoverShort() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-[#F8F7F4] py-20">
      <Container>
        <div>
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold font-cormorant text-center"
          >
            Don't Sell Yourself Short
          </motion.h4>
          <section className="bg-[#FAF9F6] py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
              >
                {features.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="text-center space-y-4"
                    >
                      <Icon className="mx-auto size-10 text-[#B7A47C]" />
                      <h4 className="text-lg font-semibold text-[#B7A47C]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#404A60] leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
