"use client";
import BlogCard from "@/common/BlogCard";
import Container from "@/common/Container";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Blogs({ data }) {
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
            READ OUR
          </motion.p>
          <motion.h4
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-semibold font-cormorant"
          >
            BLOGS
          </motion.h4>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 lg:my-20"
        >
          {data?.map((blog, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogCard data={blog} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center"
        >
          <Link href="/blogs">
            <Button className="bg-transparent text-secondary border border-secondary rounded-none text-base h-12 hover:text-white px-5!">
              VIEW ALL POSTS <MoveRight className="size-6" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}
