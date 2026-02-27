export const dynamic = "force-dynamic";
import CommonBanner from "@/common/CommonBanner";
import SellerHeader from "@/components/SellerComponent/SellerHeader";
import SellingGuideForm from "@/components/SellerComponent/SellingGuideForm";
import SellingProcess from "@/components/SellerComponent/SellingProcess";
import SendMessage from "@/components/shared/SendMessage";
import { getHomeSellerBanner, getSellingProcess } from "@/hooks/cms.api";

export const metadata = {
  title: "Sellers - Medlock Realty",
  description: "Explore our latest sellers resources and guides.",
};

export default async function page() {
  const bannerData = await getHomeSellerBanner();
  const sellingProcess = await getSellingProcess();

  return (
    <div>
      <CommonBanner
        title={bannerData?.data?.title}
        subtitle={bannerData?.data?.sub_title}
        banner_img={bannerData?.image}
      />
      <SellerHeader />
      <SellingProcess data={sellingProcess?.data} />
      <SellingGuideForm />
      <SendMessage />
    </div>
  );
}
