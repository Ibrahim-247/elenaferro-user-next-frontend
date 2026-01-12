import CommonBanner from "@/common/CommonBanner";
import HomeBuyingGuideForm from "@/components/BuyersComponents/HomeBuyingGuideForm";
import ClientSay from "@/components/HomeComponents/ClientSay";
import LendingHeader from "@/components/LendingPartnerComponent/LendingHeader";
import LoanApplication from "@/components/LendingPartnerComponent/LoanApplication";

export default function page() {
  return (
    <div>
      <CommonBanner title={"LENDING PARTNERS"} subtitle={"RESOURCES"} />
      <LendingHeader />
      <LoanApplication />
      <HomeBuyingGuideForm />
      <ClientSay />
    </div>
  );
}
