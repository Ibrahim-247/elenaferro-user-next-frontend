import CommonBanner from "@/common/CommonBanner";
import BuyersHeader from "@/components/BuyersComponents/BuyersHeader";
import BuyingProcess from "@/components/BuyersComponents/BuyingProcess";

export default function page() {
  return (
    <div>
      <CommonBanner title={"HOME BUYERS"} subtitle={"RESOURCES FOR"} />
      <BuyersHeader />
      <BuyingProcess />
    </div>
  );
}
