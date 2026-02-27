import CommonBanner from "@/common/CommonBanner";
import LendingHeader from "@/components/LendingPartnerComponent/LendingHeader";
import LoanApplication from "@/components/LendingPartnerComponent/LoanApplication";
import { getLendingBannerData, getPartnerAboutData } from "@/hooks/cms.api";

export const metadata = {
  title: "Lending Partner - Medlock Realty",
  description: "Explore our latest lending partner resources and guides.",
};

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
    </div>
  );
}
