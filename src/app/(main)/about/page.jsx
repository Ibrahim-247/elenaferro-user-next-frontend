import CommonBanner from "@/common/CommonBanner";
import About from "@/components/AboutComponents/About";
import Different from "@/components/AboutComponents/Different";
import ClientSay from "@/components/HomeComponents/ClientSay";
import Consultation from "@/components/AboutComponents/Consultation";
import {
  getAboutBannerData,
  getAboutDifferentData,
  getAboutMedlockData,
  getAboutscheduleData,
} from "@/hooks/cms.api";

export default async function page() {
  const bannerData = await getAboutBannerData();
  const aboutMedlockData = await getAboutMedlockData();
  const differentData = await getAboutDifferentData();
  const scheduleData = await getAboutscheduleData();
  console.log(bannerData);

  return (
    <div>
      <CommonBanner
        banner_img={bannerData?.data?.image}
        title={bannerData?.data?.title}
        subtitle={bannerData?.data?.sub_title}
      />

      <About data={aboutMedlockData?.data} />
      <Different data={differentData?.data} />
      <ClientSay />
      <Consultation data={scheduleData?.data} />
    </div>
  );
}
