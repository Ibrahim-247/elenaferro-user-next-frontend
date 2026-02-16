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

const reviewsData = [
  {
    id: 1,
    review:
      "Medlock Realty gives me the flexibility I was looking for without the excessive fees. Everything is straightforward, and I always know what I’m paying. It’s been a refreshing change from my previous brokerage.",
    author: "Licensed Georgia Real Estate Agent",
    location: "Georgia",
  },
  {
    id: 2,
    review:
      "The onboarding process was smooth and efficient. I appreciated how clear the expectations were from day one. It feels professional without being overly rigid.",
    author: "Atlanta Metro Area Agent",
    location: "Atlanta Metro Area",
  },
  {
    id: 3,
    review:
      "I like that I can focus on my clients instead of worrying about unnecessary brokerage costs. The systems are clean, modern, and easy to use.",
    author: "Independent Agent",
    location: "North Fulton",
  },
  {
    id: 4,
    review:
      "This model makes sense for how I actually work. No pressure, no confusing splits, just a clear structure and solid broker support when I need it.",
    author: "Georgia Salesperson",
    location: "Georgia",
  },
  {
    id: 5,
    review:
      "Medlock Realty strikes a great balance between independence and oversight. I never feel micromanaged, but I also don’t feel like I’m on my own.",
    author: "Residential Real Estate Agent",
    location: "Georgia",
  },
  {
    id: 6,
    review:
      "What stood out to me was the transparency. No hidden fees, no surprises, and no complicated commission structures. I knew exactly what I was signing up for, which is rare in this industry.",
    author: "Georgia Licensed Agent",
    location: "Georgia",
  },
  {
    id: 7,
    review:
      "As someone who didn’t need constant hand-holding but still wanted reliable broker support, this setup works extremely well. The onboarding tools and compliance process are clear and efficient.",
    author: "Metro Atlanta Agent",
    location: "Metro Atlanta",
  },
];

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
    <div className="py-20 bg-[#F8F7F4]">
      <Container>
        <div className="space-y-3 text-center">
          <p className="text-xl font-normal text-secondary">WHAT OUR</p>
          <h4 className="text-4xl lg:text-6xl font-semibold font-cormorant">
            CLIENTS SAY
          </h4>
        </div>
        <div className="mt-14">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {reviewsData?.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="border-[#C4BCA9] p-8 lg:p-11 text-center text-lg lg:text-xl font-normal border-2 gap-y-4 lg:gap-y-8 flex flex-col items-center">
                    <Image src={quots} alt="quots" className="w-10 lg:w-20" />
                    {item?.review}
                    <div className="w-24 bg-secondary h-0.5"></div>
                    <p className="text-2xl font-semibold font-cormorant">
                      {item?.location}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2.5 h-2 transition-all ${
                  current === index ? "bg-secondary w-5" : "bg-secondary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
