"use client";

import Container from "@/common/Container";
import { motion } from "framer-motion";

export default function SearchHeader() {
  return (
    <div className="py-4">
      <Container>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold text-center font-cormorant leading-tight"
        >
          PROPERTY SEARCH
        </motion.h4>
      </Container>
    </div>
  );
}
