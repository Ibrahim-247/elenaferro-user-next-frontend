"use client";

import Container from "@/common/Container";
import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import { LuMailOpen } from "react-icons/lu";
import Link from "next/link";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutUs({ data }) {
  return (
    <div className="py-10 lg:py-16">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 lg:space-y-10"
        >
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <p className="text-lg font-medium text-secondary/80 font-montserrat uppercase tracking-wider">
              {data?.sub_title}
            </p>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-semibold font-cormorant leading-tight">
              {data?.title}
            </h3>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700/90 text-center"
          >
            <p>
              {data?.description ||
                ` Medlock Realty is a boutique real estate brokerage made up of the
              most dedicated real estate experts. At Medlock Realty, we have
              cultivated a unique culture that encourages collaboration,
              embraces technology, and harnesses the power of social media
              through creative marketing techniques.`}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-4 text-center flex flex-col items-center"
          >
            <div className="text-xl font-normal flex items-center gap-2">
              <Phone />{" "}
              <span>
                <a href={`tel:${data?.phone}`}>{data?.phone}</a>
              </span>
            </div>
            <div className="text-xl font-normal flex items-center gap-2">
              <LuMailOpen />{" "}
              <span>
                <a href={`mailto:${data?.email}`}>{data?.email}</a>
              </span>
            </div>

            <Link href="/about">
              <Button className="h-11 bg-secondary text-white hover:bg-secondary/90 px-8! rounded-none">
                READ MORE <GoArrowRight />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
