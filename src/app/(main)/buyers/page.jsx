export const dynamic = "force-dynamic";
import CommonBanner from "@/common/CommonBanner";
import BuyersHeader from "@/components/BuyersComponents/BuyersHeader";
import BuyingProcess from "@/components/BuyersComponents/BuyingProcess";
import HomeBuyingGuideForm from "@/components/BuyersComponents/HomeBuyingGuideForm";
import SendMessage from "@/components/shared/SendMessage";
import { getBuyerBuyingProcessData } from "@/hooks/cms.api";

export default async function page() {
  // const bannerData = await getBuyerBannerData();
  const buyingProcces = await getBuyerBuyingProcessData();

  return (
    <div>
      <CommonBanner title={"HOME BUYERS"} subtitle={"RESOURCES FOR"} />
      <BuyersHeader />
      <BuyingProcess data={buyingProcces?.data} />
      <HomeBuyingGuideForm />
      <SendMessage />
    </div>
  );
}
