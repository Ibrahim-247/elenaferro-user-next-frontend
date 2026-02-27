import CommonBanner from "@/common/CommonBanner";
import MakeoverShort from "@/components/MakeoverComponents/MakeoverShort";
import PresellService from "@/components/MakeoverComponents/PresellService";
import Transformation from "@/components/MakeoverComponents/Transformation";
import SendMessage from "@/components/shared/SendMessage";

export const metadata = {
  title: "Medlock Makeover - Medlock Realty",
  description: "Explore our latest Medlock Makeover resources and guides.",
};

export default function page() {
  return (
    <div>
      <CommonBanner title={"FIX NOW. PAY AT CLOSING"} subtitle={"RESOURCES"} />
      <MakeoverShort />
      <PresellService />
      <Transformation />
      <SendMessage />
    </div>
  );
}
