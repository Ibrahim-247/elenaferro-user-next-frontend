import { Button } from "@/components/ui/button";
import blogImg from "../assets/blog.png";
import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="w-full shadow">
      <div className="h-71 w-full overflow-hidden bg-gray-100">
        <Image src={blogImg} alt="blogImg" className="w-full h-full" />
      </div>
      <div className="p-8 space-y-4">
        <h3 className="text-lg font-medium text-secondary line-clamp-2">
          Essential Real Estate Terminology: A Guide for Buyers and Sellers
        </h3>
        <p className="text-base font-normal line-clamp-3">
          Embarking on a journey to buy or sell a home can be an exciting yet
          daunting experience. Amidst…
        </p>
        <Button className="rounded-none bg-secondary text-white hover:bg-secondary/90">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}
