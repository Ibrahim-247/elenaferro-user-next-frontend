"use client";

import Container from "@/common/Container";
import Img from "../../assets/send_message.png";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactRequest() {
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
    <div className="py-20 mt-26">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-3 text-center">
            <motion.p variants={itemVariants} className="text-xl font-normal text-secondary">SEND A</motion.p>
            <motion.h4 variants={itemVariants} className="text-5xl md:text-6xl font-semibold font-cormorant">MESSAGE</motion.h4>
          </div>

          <div className="my-7 relative flex flex-col items-center sm:block">
            <motion.div
              variants={itemVariants}
              className="max-w-135 w-full h-80 sm:h-180 overflow-hidden"
            >
              <Image
                src={Img}
                alt="Img"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
              }}
              className="max-w-207 w-full bg-white sm:absolute top-10 right-0 shadow-xl p-6 md:p-12 z-10 mt-[-2rem] sm:mt-0"
            >
              <div>
                <h4 className="text-3xl font-bold text-secondary font-cormorant uppercase">
                  YOUR GEORGIA BROKERAGE
                </h4>
                <p className="text-lg font-normal mb-8">
                  Ready To Make A Move With Medlock?
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
