"use client";

import { useState, useEffect } from "react";
import Container from "@/common/Container";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { PopupModal } from "react-calendly";

export default function Consultation({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.body);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
          className="w-full flex flex-col items-center justify-center gap-6 md:gap-8 text-center px-4"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-cormorant font-semibold text-secondary max-w-full lg:max-w-110 whitespace-normal w-full leading-tight"
          >
            {data?.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-full lg:max-w-200 text-lg font-normal text-[#404A60] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data?.description || "" }}
          ></motion.p>
          <motion.div variants={itemVariants}>
            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-none bg-secondary text-white hover:bg-secondary/90 h-11 px-8 w-full sm:w-auto"
            >
              SCHEDULE CONSULTATION <MoveRight className="size-5 md:size-6" />
            </Button>
            {rootElement && (
              <PopupModal
                url="https://calendly.com/dev-rodro/30min"
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={rootElement}
              />
            )}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
