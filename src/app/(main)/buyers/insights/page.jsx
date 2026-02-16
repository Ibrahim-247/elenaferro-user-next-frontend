import InsightsHeader from "@/components/BuyersComponents/Insights/InsightsHeader";
import MarketStats from "@/components/BuyersComponents/Insights/MarketStats";
import PriceChart from "@/components/BuyersComponents/Insights/PriceChart";
import MarketTable from "@/components/BuyersComponents/Insights/MarketTable";
import MarketReportForm from "@/components/BuyersComponents/Insights/MarketReportForm";

export default function InsightsPage() {
  return (
    <div className="bg-[#FCFCFB] py-24 lg:py-40">
      <InsightsHeader />
      <MarketStats />
      <PriceChart />
      <MarketTable />
      <MarketReportForm />
    </div>
  );
}
