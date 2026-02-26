"use client";
import React, { useEffect, useState } from "react";
import Container from "@/common/Container";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogImg from "@/assets/blog.png";
import { motion } from "framer-motion";

const BlogDetails = ({ blog }) => {
  const [shareUrl, setShareUrl] = useState("");

  const data = blog || {
    date: "January 10, 2022",
    title:
      "Winning Strategies: How To Triumph In A Bidding War In A Fast Real Estate Market",
    image: blogImg,
    content: [
      "Lorem ipsum dolor sit amet consectetur. A eu facilisis leo tellus commodo. Posuere bibendum ornare netus nunc arcu quis. Eget nec magna lacus fermentum fermentum libero. Rhoncus sed faucibus urna cras praesent nisl elit. Donec rhoncus fringilla quisque urna sapien. Pharetra adipiscing euismod ultricies egestas aenean. Quis et morbi nec id iaculis. Volutpat velit urna in faucibus leo sapien leo semper. Mus feugiat nisl rutrum tristique nulla tristique rhoncus aliquam. Augue pharetra et erat sed aliquam faucibus.",
      "Lorem Ipsum Dolor Sit ...",
      "Lorem ipsum dolor sit amet consectetur. Faucibus et nisi est pellentesque proin porttitor odio. Id dolor vivamus at magna. Placerat eget facilisis praesent egestas elementum auctor etiam metus. Arcu sed lorem sollicitudin vel sapien nisi. Velit nisl ultricies blandit ultrices dis posuere aliquet. Lectus tortor ultricies tempus nisl id nisl duis. Interdum non fusce cursus erat nunc in. Faucibus varius elementum vel maecenas sed mi laoreet. Arcu purus nec libero condimentum diam dictum. Risus diam amet in viverra orci netus. Nisi aliquam enim sed sociis tempus elit morbi sed. Nunc et sem mattis sed arcu nunc. Vulputate in penatibus orci eros in.",
    ],
  };

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent("Check this out!");

  const socialLinks = [
    {
      icon: <FaFacebookF className="size-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: "bg-[#3B5998]",
    },
    {
      icon: <FaLinkedinIn className="size-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bg: "bg-[#0077B5]",
    },

    {
      icon: <FaXTwitter className="size-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      bg: "bg-[#000000]",
    },
  ];

  if (!shareUrl) return null;

  return (
    <div className="py-20 lg:py-32 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">
              <Calendar className="size-4 text-secondary" />
              <span className="font-semibold tracking-wide uppercase text-xs">
                {data.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold font-cormorant text-center max-w-5xl leading-[1.1] text-gray-900 tracking-tight">
              {data.title}
            </h1>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-[90%] mx-auto mb-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden ring-1 ring-black/5"
          >
            <Image
              src={data.image}
              alt={data.title}
              className=" w-full h-auto object-cover max-h-150 hover:scale-105 transition-transform duration-1000 ease-in-out"
              priority
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto w-full px-4 sm:px-0"
          >
            <div className="content prose prose-lg md:prose-xl max-w-none text-gray-600 space-y-10 text-lg md:text-2xl leading-[1.7] font-normal">
              {data.content.map((para, index) => {
                if (para.includes("Lorem Ipsum Dolor Sit")) {
                  return (
                    <h3
                      key={index}
                      className="text-3xl md:text-4xl font-semibold font-cormorant text-gray-900 pt-8 pb-4"
                    >
                      {para}
                    </h3>
                  );
                }
                return (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "first-letter:text-7xl first-letter:font-cormorant first-letter:float-left first-letter:mr-4 first-letter:mt-3 first-letter:text-secondary first-letter:font-bold"
                        : ""
                    }
                  >
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Sharing Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-24 pt-12 border-t border-gray-100 flex flex-col items-center justify-center gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-gray-200"></div>
                <span className="text-gray-400 font-bold text-sm capitalize whitespace-nowrap">
                  Share This Article
                </span>
                <div className="h-px w-10 bg-gray-200"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`size-12 flex items-center justify-center rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300 ${social.bg}`}
                    title={`Share on ${social.icon.type.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
