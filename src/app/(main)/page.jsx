import AboutUs from "@/components/HomeComponents/AboutUs";
import Achievement from "@/components/HomeComponents/Achievement";
import Blogs from "@/components/HomeComponents/Blogs";
import ClientSay from "@/components/HomeComponents/ClientSay";
import Features from "@/components/HomeComponents/Features";
import Hero from "@/components/HomeComponents/Hero";
import NewestProperty from "@/components/HomeComponents/NewestProperty";
import SendMessage from "@/components/shared/SendMessage";

export default function page() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <NewestProperty />
      <Achievement />
      <Features />
      <ClientSay />
      <Blogs />
      <SendMessage />
    </div>
  );
}
