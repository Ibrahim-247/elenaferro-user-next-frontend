import { Button } from "@/components/ui/button";
import blogImg from "../assets/blog.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="w-full shadow bg-white h-full flex flex-col hover:shadow-xl transition-shadow"
    >
      <div className="h-71 w-full overflow-hidden bg-gray-100">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <Image
            src={blogImg}
            alt="blogImg"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <div className="p-8 space-y-4 grow">
        <h3 className="text-lg font-medium text-secondary line-clamp-2">
          Essential Real Estate Terminology: A Guide for Buyers and Sellers
        </h3>
        <p className="text-base font-normal line-clamp-3">
          Embarking on a journey to buy or sell a home can be an exciting yet
          daunting experience. Amidst…
        </p>
        <Link href="/blogs/1">
          <Button className="rounded-none bg-secondary text-white hover:bg-secondary/90">
            LEARN MORE
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
