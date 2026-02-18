import CommonBanner from "@/common/CommonBanner";
import BuyersHeader from "@/components/BuyersComponents/BuyersHeader";
import BuyingProcess from "@/components/BuyersComponents/BuyingProcess";
import HomeBuyingGuideForm from "@/components/BuyersComponents/HomeBuyingGuideForm";
import SendMessage from "@/components/shared/SendMessage";
import { getBuyerBannerData, getBuyerBuyingProcessData } from "@/hooks/cms.api";

export default async function page() {
  const bannerData = await getBuyerBannerData();
  const buyingProcces = await getBuyerBuyingProcessData();
  console.log(buyingProcces);

  return (
    <div>
      <CommonBanner
        title={bannerData?.data?.title}
        subtitle={bannerData?.data?.sub_title}
        banner_img={bannerData?.data?.image}
      />
      <BuyersHeader />
      <BuyingProcess data={buyingProcces?.data} />
      <HomeBuyingGuideForm />
      <SendMessage />
    </div>
  );
}
