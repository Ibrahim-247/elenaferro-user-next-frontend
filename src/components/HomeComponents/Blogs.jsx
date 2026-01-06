import BlogCard from "@/common/BlogCard";
import Container from "@/common/Container";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function Blogs() {
  return (
    <div className="py-20">
      <Container>
        <div className="space-y-3 text-center">
          <p className="text-xl font-normal text-secondary">READ OUR</p>
          <h4 className="text-6xl font-semibold font-cormorant">BLOGS</h4>
        </div>
        <div className="grid grid-cols-3 gap-8 my-20">
          {[...Array(3)].map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button className="bg-transparent text-secondary border border-secondary rounded-none text-base h-12 hover:text-white px-5!">
            VIEW ALL POSTS <MoveRight className="size-6" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
