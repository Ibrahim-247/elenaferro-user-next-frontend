import AboutUs from "@/components/HomeComponents/AboutUs";
import Blogs from "@/components/HomeComponents/Blogs";
import ClientSay from "@/components/HomeComponents/ClientSay";
import Features from "@/components/HomeComponents/Features";
import Hero from "@/components/HomeComponents/Hero";
import NewestProperty from "@/components/HomeComponents/NewestProperty";
import SendMessage from "@/components/shared/SendMessage";
import {
  getAboutData,
  getFeatureData,
  getHeroData,
  getLatestBlogData,
} from "@/hooks/cms.api";

export default async function page() {
  const heroData = await getHeroData();
  const aboutData = await getAboutData();
  const featureData = await getFeatureData();
  const latestBlogData = await getLatestBlogData();

  return (
    <div>
      <Hero data={heroData?.data} />
      <AboutUs data={aboutData?.data} />
      <NewestProperty />
      <Features data={featureData?.data} />
      <ClientSay />
      <Blogs data={latestBlogData?.data?.data} />
      <SendMessage />
    </div>
  );
}
