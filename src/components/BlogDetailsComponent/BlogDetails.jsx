"use client";
import React, { useEffect, useState } from "react";
import Container from "@/common/Container";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogImg from "@/assets/blog.png";
import { motion } from "framer-motion";
import useApiMutation from "@/hooks/Mutation/useApiMutation";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const [shareUrl, setShareUrl] = useState("");
  const params = useParams();
  const slug = params.slug;

  const { data: blogDetails, isPending } = useApiMutation({
    key: "blog-details",
    endpoint: `/blogs/${slug}`,
    method: "get",
    params: { slug },
    onError: (error) => {
      console.error("Error from blog details API:", error);
    },
  });

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  if (isPending) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div
          className="animate-spin inline-block size-10 border-3 border-current border-t-transparent rounded-[999px] text-primary"
          role="status"
          aria-label="loading"
        ></div>
      </div>
    );
  }

  const data = {
    date:
      new Date(blogDetails?.data?.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) || "January 10, 2022",
    title: blogDetails?.data?.title,
    image: blogDetails?.data?.image || blogImg,
    content:
      blogDetails?.data?.description ||
      '<h1 class="entry-title" itemprop="headline" style="box-sizing: inherit; border: 0px; font-size: 2rem; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; outline: 0px; padding: 0px; vertical-align: baseline; clear: both; color: rgb(30, 41, 59); font-family: &quot;Cormorant Garamond&quot;, sans-serif; letter-spacing: normal;"><h3><b>Essential Real Estate Terminology: A Guide for Buyers and Sellers</b></h3></h1>',
  };

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
                {data?.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold font-cormorant text-center max-w-5xl leading-[1.1] text-gray-900 tracking-tight">
              {data?.title}
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
              src={data?.image}
              alt={data?.title}
              width={1100}
              height={600}
              className=" w-full h-auto object-cover max-h-150 hover:scale-105 transition-transform duration-1000 ease-in-out"
              unoptimized={true}
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
            <p
              dangerouslySetInnerHTML={{ __html: data?.content || "" }}
              className="text-2xl"
            ></p>

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
                {socialLinks?.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`size-12 flex items-center justify-center rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300 ${social.bg}`}
                    title={`Share on ${social?.icon.type.name}`}
                  >
                    {social?.icon}
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
