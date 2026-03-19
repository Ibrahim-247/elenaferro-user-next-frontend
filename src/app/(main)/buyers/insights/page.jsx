import InsightsHeader from "@/components/BuyersComponents/Insights/InsightsHeader";
import MarketStats from "@/components/BuyersComponents/Insights/MarketStats";

export const metadata = {
  title: "Insights - Medlock Realty",
  description: "Explore our latest market insights and reports.",
};

export default function InsightsPage() {
  return (
    <div className="bg-[#FCFCFB] pt-34 pb-10 lg:pt-50">
      <InsightsHeader />
      <MarketStats />
    </div>
  );
}
