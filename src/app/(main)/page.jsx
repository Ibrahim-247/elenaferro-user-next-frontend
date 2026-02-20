import AboutUs from "@/components/HomeComponents/AboutUs";
import Achievement from "@/components/HomeComponents/Achievement";
import Blogs from "@/components/HomeComponents/Blogs";
import ClientSay from "@/components/HomeComponents/ClientSay";
import Features from "@/components/HomeComponents/Features";
import Hero from "@/components/HomeComponents/Hero";
import NewestProperty from "@/components/HomeComponents/NewestProperty";
import SendMessage from "@/components/shared/SendMessage";
import {
  getAchivementData,
  getFeatureData,
  getHeroData,
} from "@/hooks/cms.api";

export default async function page() {
  const heroData = await getHeroData();
  const achivementData = await getAchivementData();
  const featureData = await getFeatureData();
  console.log(featureData);

  return (
    <div>
      <Hero data={heroData?.data} />
      <AboutUs />
      <NewestProperty />
      <Achievement data={achivementData?.data} />
      <Features data={featureData?.data} />
      <ClientSay />
      <Blogs />
      <SendMessage />
    </div>
  );
}
