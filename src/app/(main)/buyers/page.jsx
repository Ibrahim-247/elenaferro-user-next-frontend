import CommonBanner from "@/common/CommonBanner";
import BuyersHeader from "@/components/BuyersComponents/BuyersHeader";
import BuyingProcess from "@/components/BuyersComponents/BuyingProcess";
import HomeBuyingGuideForm from "@/components/BuyersComponents/HomeBuyingGuideForm";
import SendMessage from "@/components/shared/SendMessage";

export default function page() {
  return (
    <div>
      <CommonBanner title={"HOME BUYERS"} subtitle={"RESOURCES FOR"} />
      <BuyersHeader />
      <BuyingProcess />
      <HomeBuyingGuideForm />
      <SendMessage />
    </div>
  );
}
