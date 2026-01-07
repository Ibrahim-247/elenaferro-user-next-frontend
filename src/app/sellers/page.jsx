import CommonBanner from "@/common/CommonBanner";
import SellerHeader from "@/components/SellerComponent/SellerHeader";
import SellingGuideForm from "@/components/SellerComponent/SellingGuideForm";
import SellingProcess from "@/components/SellerComponent/SellingProcess";
import SendMessage from "@/components/shared/SendMessage";

export default function page() {
  return (
    <div>
      <CommonBanner title="HOME SELLERS" subtitle="RESOURCES FOR" />
      <SellerHeader />
      <SellingProcess />
      <SellingGuideForm />
      <SendMessage />
    </div>
  );
}
