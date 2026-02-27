import BlogWraper from "@/components/BlogComponents/BlogWraper";
import { getAllBlogData } from "@/hooks/cms.api";

export const metadata = {
  title: "Blogs - Medlock Realty",
  description: "Explore our latest blog posts and insights.",
};

export default async function page() {
  const blogList = await getAllBlogData();

  return (
    <div>
      <BlogWraper blogList={blogList?.data?.data} />
    </div>
  );
}
