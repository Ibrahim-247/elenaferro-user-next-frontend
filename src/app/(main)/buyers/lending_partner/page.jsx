export const dynamic = "force-dynamic";
import CommonBanner from "@/common/CommonBanner";
import HomeBuyingGuideForm from "@/components/BuyersComponents/HomeBuyingGuideForm";
import ClientSay from "@/components/HomeComponents/ClientSay";
import LendingHeader from "@/components/LendingPartnerComponent/LendingHeader";
import LoanApplication from "@/components/LendingPartnerComponent/LoanApplication";
import { getLendingBannerData, getPartnerAboutData } from "@/hooks/cms.api";

export default async function page() {
  const bannerData = await getLendingBannerData();
  const aboutData = await getPartnerAboutData();

  return (
    <div>
      <CommonBanner
        title={bannerData?.data?.title}
        subtitle={bannerData?.data?.sub_title}
        banner_img={bannerData?.data?.image}
      />
      <LendingHeader />
      <LoanApplication data={aboutData?.data} />
      <HomeBuyingGuideForm />
      <ClientSay />
    </div>
  );
}
