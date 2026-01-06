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
          <h4 className="text-6xl font-semibold font-cormorant">CLIENTS SAY</h4>
        </div>
        <div className="mt-14">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {[...Array(4)].map((_, index) => (
                <CarouselItem key={index}>
                  <div className="border-[#C4BCA9] p-11 text-center text-xl font-normal border-2 gap-y-8 flex flex-col items-center">
                    <Image src={quots} alt="quots" className="w-20" />
                    Elena and Aryan were absolutely wonderful to work with. They
                    listened to all our hopes and concern and knew exactly how
                    to help us find what we needed!
                    <div className="w-24 bg-secondary h-0.5"></div>
                    <p className="text-2xl font-semibold font-cormorant">
                      Sandy Williams
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
