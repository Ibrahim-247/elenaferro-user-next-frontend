import AboutUs from "@/components/HomeComponents/AboutUs";
import Achievement from "@/components/HomeComponents/Achievement";
import Features from "@/components/HomeComponents/Features";
import Hero from "@/components/HomeComponents/Hero";
import NewestProperty from "@/components/HomeComponents/NewestProperty";

export default function page() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <NewestProperty />
      <Achievement />
      <Features />
    </div>
  );
}
