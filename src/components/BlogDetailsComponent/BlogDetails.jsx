"use client";
import React, { useEffect, useState, useMemo } from "react";
import Container from "@/common/Container";
import Image from "next/image";
import {
  Calendar,
  ChevronLeft,
  Clock,
  Share2,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogImg from "@/assets/blog.png";
import { motion, useScroll, useSpring } from "framer-motion";
import useApiMutation from "@/hooks/Mutation/useApiMutation";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const BlogDetails = () => {
  const [shareUrl, setShareUrl] = useState("");
  const params = useParams();
  const slug = params.slug;
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { data: blogDetails, isPending } = useApiMutation({
    key: ["blog-details", slug],
    endpoint: `/blogs/${slug}`,
    method: "get",
    params: { slug },
  });

  const { data: recentBlogs } = useApiMutation({
    key: "recent-blogs",
    endpoint: "/blogs", // Assuming /blogs returns a list, we'll slice it
    method: "get",
  });

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const data = useMemo(() => {
    if (!blogDetails?.data) return null;
    return {
      date: new Date(blogDetails.data.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      title: blogDetails.data.title,
      image: blogDetails.data.image || blogImg,
      content: blogDetails.data.description,
      author: blogDetails.data.author || "Elena Ferro",
      readTime: "5 min read", // Placeholder if not in API
    };
  }, [blogDetails]);

  if (isPending) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="size-12 border-4 border-secondary/30 border-t-secondary rounded-full"
        />
      </div>
    );
  }

  if (!data)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        Blog post not found.
      </div>
    );

  const encodedUrl = encodeURIComponent(shareUrl);
  const socialLinks = [
    {
      icon: <FaFacebookF size={18} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: "bg-[#3B5998]",
      name: "Facebook",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bg: "bg-[#0077B5]",
      name: "LinkedIn",
    },
    {
      icon: <FaXTwitter size={18} />,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
      bg: "bg-black",
      name: "X",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-secondary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Header / Hero Section */}
      <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gray-50/50 border-b border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <button
                onClick={() => router.back()}
                className="group flex items-center gap-2 text-gray-500 hover:text-secondary transition-colors mb-8"
              >
                <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium uppercase tracking-widest">
                  Back to Blogs
                </span>
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-100 text-secondary">
                  <Calendar className="size-4" />
                  {data.date}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-100">
                  <Clock className="size-4" />
                  {data.readTime}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-100 uppercase tracking-tight text-[10px]">
                  BY {data.author}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-cormorant text-gray-900 leading-[1.1] mb-8 lg:mb-12">
                {data.title}
              </h1>
            </motion.div>
          </div>
        </Container>
      </div>

      <Container className="mt-12 lg:mt-16">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 pt-10">
          {/* Main Content Area */}
          <div className="lg:w-2/3 xl:w-3/4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-12 shadow-black/10"
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                priority
                unoptimized={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="blog-content-wrapper text-[18px] lg:text-[20px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.content || "" }}
            />

            {/* Bottom Share */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  Share Article
                </span>
                <div className="flex gap-2">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`size-10 flex items-center justify-center rounded-full text-white ${social.bg} transition-transform hover:-translate-y-1 hover:shadow-lg`}
                      title={`Share on ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {/* Post Tags or categories could go here */}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 xl:w-1/4">
            <div className="sticky top-30 space-y-12">
              {/* Author Card */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-cormorant text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2 uppercase tracking-wide">
                  About Author
                </h4>
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">
                    {data.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{data.author}</h5>
                    <p className="text-xs text-gray-500 uppercase tracking-tight">
                      Medlock Realty Expert
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed italic">
                  "Helping you find your dream home with expert advice and
                  market insights tailored specifically for your needs."
                </p>
              </div>

              {/* Recent Posts */}
              {recentBlogs?.data?.data && (
                <div>
                  <h4 className="font-cormorant text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2 uppercase tracking-wide">
                    Recent Posts
                  </h4>
                  <div className="space-y-6">
                    {recentBlogs.data.data
                      .slice(0, 4)
                      .filter((b) => b.slug !== slug)
                      .map((post, idx) => (
                        <Link
                          key={idx}
                          href={`/blogs/${post.slug}`}
                          className="group flex gap-4"
                        >
                          <div className="relative size-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={post.image || blogImg}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              unoptimized={true}
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h5 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-secondary transition-colors leading-snug mb-1">
                              {post.title}
                            </h5>
                            <span className="text-[10px] text-gray-400 uppercase font-medium tracking-wider">
                              {new Date(post.created_at).toLocaleDateString(
                                "en-US",
                                { month: "short", day: "numeric" },
                              )}
                            </span>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
