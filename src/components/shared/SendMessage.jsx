"use client";
import Container from "@/common/Container";
import Img from "../../assets/send_message.png";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "../ContactComponents/ContactForm";

export default function SendMessage() {
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
    <div className="py-10 lg:py-16 bg-[#F8F7F4] overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="space-y-3 text-center">
            <motion.p
              variants={itemVariants}
              className="text-lg font-medium tracking-widest uppercase text-secondary/80 font-montserrat"
            >
              SEND A
            </motion.p>
            <motion.h4
              variants={itemVariants}
              className="text-4xl lg:text-5xl xl:text-6xl font-semibold font-cormorant leading-tight"
            >
              MESSAGE
            </motion.h4>
          </div>

          <div className="mt-10 lg:mt-16 relative flex flex-col items-center">
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start relative">
              <motion.div
                variants={itemVariants}
                className="w-full lg:w-[45%] h-64 lg:h-160 overflow-hidden rounded-2xl shadow-lg relative z-0"
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
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, delay: 0.3 },
                  },
                }}
                className="w-full lg:w-[65%] bg-white lg:absolute top-1/2 lg:-translate-y-1/2 right-0 shadow-2xl p-6 lg:p-14 z-10 -mt-20 lg:mt-0 rounded-2xl border border-gray-100"
              >
              <div>
                <h4 className="text-3xl font-bold text-secondary font-cormorant">
                  YOUR GEORGIA BROKERAGE
                </h4>
                <p className="text-lg font-normal mb-6">
                  Ready To Make A Move With Medlock?
                </p>
                <ContactForm />
              </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
