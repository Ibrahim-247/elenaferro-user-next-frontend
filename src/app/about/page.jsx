import CommonBanner from "@/common/CommonBanner";
import aboutBanner from "../../assets/about_banner.png";
import About from "@/components/AboutComponents/About";
import Different from "@/components/AboutComponents/Different";
import ClientSay from "@/components/HomeComponents/ClientSay";
import Consultation from "@/components/AboutComponents/Consultation";

export default function page() {
  return (
    <div>
      <CommonBanner
        banner_img={aboutBanner}
        title={"ABOUT US"}
        subtitle={"GET TO KNOW US"}
      />

      <About />
      <Different />
      <ClientSay />
      <Consultation />
    </div>
  );
}
