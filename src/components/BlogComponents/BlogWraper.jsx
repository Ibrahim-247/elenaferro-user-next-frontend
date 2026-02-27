"use client";
import BlogCard from "@/common/BlogCard";
import Container from "@/common/Container";
import { motion } from "framer-motion";

export default function BlogWraper({ blogList }) {
  console.log(blogList);

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
    },
  };

  return (
    <div className="py-40">
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl uppercase font-semibold font-cormorant text-center"
        >
          Blogs
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:grid-cols-3 grid gap-6 mt-20"
        >
          {blogList?.map((blog, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogCard data={blog} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
