"use client";

import Container from "@/common/Container";
import quots from "../../assets/quots.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const reviewsData = [
  {
    id: 1,
    review:
      "The absolute best team to work with! Extremely organized, personable and knowledgeable. Fierce negotiators and really gave us an exceptional experience!",
    author: "Casey Johnson",
    location: "Georgia",
  },
  {
    id: 2,
    review:
      "Elena and Aryan were absolutely wonderful to work with. They listened to all our hopes and concerns and knew exactly how to help us find what we needed!",
    author: "Sandy Williams",
    location: "Atlanta Metro Area",
  },
  {
    id: 3,
    review: `We love them!!!Hands down the most professional agents we have worked with. Totally reliable and efficient.`,
    author: "Robbie White",
    location: "North Fulton",
  },
  {
    id: 4,
    review:
      "We relocated from the West Coast to Atlanta for work and they really gave us the white glove service! So helpful and knowledgeable!",
    author: "Gina Choi",
    location: "Georgia",
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ClientSay() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="py-12 lg:py-20 bg-[#F8F7F4]">
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
            className="text-xl font-normal uppercase text-secondary"
          >
            WHAT OUR
          </motion.p>
          <motion.h4
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-semibold uppercase font-cormorant"
          >
            Clients Say
          </motion.h4>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mt-14"
        >
          <Carousel setApi={setApi}>
            <CarouselContent>
              {reviewsData?.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="border-[#C4BCA9] p-8 lg:p-11 text-center text-lg lg:text-xl font-normal border-2 gap-y-4 lg:gap-y-8 flex flex-col items-center">
                    <Image src={quots} alt="quots" className="w-10 lg:w-20" />
                    {item?.review}
                    <div className="w-24 bg-secondary h-0.5"></div>
                    <p className="text-2xl font-semibold font-cormorant">
                      {item?.author}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: reviewsData?.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2.5 h-2 transition-all ${
                  current === index ? "bg-secondary w-5" : "bg-secondary/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
