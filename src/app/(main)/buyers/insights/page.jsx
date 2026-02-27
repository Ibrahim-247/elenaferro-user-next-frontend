import InsightsHeader from "@/components/BuyersComponents/Insights/InsightsHeader";
import MarketStats from "@/components/BuyersComponents/Insights/MarketStats";
import PriceChart from "@/components/BuyersComponents/Insights/PriceChart";
import MarketTable from "@/components/BuyersComponents/Insights/MarketTable";
import MarketReportForm from "@/components/BuyersComponents/Insights/MarketReportForm";

export const metadata = {
  title: "Insights - Medlock Realty",
  description: "Explore our latest market insights and reports.",
};

export default function InsightsPage() {
  return (
    <div className="bg-[#FCFCFB] pt-34 pb-30 lg:pt-60 lg:pb-40">
      <InsightsHeader />
      <MarketStats />
      <PriceChart />
      <MarketTable />
      <MarketReportForm />
    </div>
  );
}
