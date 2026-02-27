import BlogDetails from "@/components/BlogDetailsComponent/BlogDetails";
import React from "react";

export const metadata = {
  title: "Blogs - Medlock Realty",
  description: "Explore our latest blog posts and insights.",
};

export default function page() {
  return (
    <main>
      <BlogDetails />
    </main>
  );
}
