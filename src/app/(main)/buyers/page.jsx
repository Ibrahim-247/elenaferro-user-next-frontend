import CommonBanner from "@/common/CommonBanner";
import BuyersHeader from "@/components/BuyersComponents/BuyersHeader";
import BuyingProcess from "@/components/BuyersComponents/BuyingProcess";
import HomeBuyingGuideForm from "@/components/BuyersComponents/HomeBuyingGuideForm";
import SendMessage from "@/components/shared/SendMessage";
import { getBuyerBuyingProcessData } from "@/hooks/cms.api";

export const metadata = {
  title: "Buyers - Medlock Realty",
  description: "Explore our latest buyer resources and guides.",
};

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
