import Container from "@/common/Container";
import { Home, BarChart2, Clock, MoveUpRight } from "lucide-react";

const stats = [
  {
    title: "Average Home Price",
    value: "$420k",
    change: "+3.2% since last month",
    icon: <Home className="size-6 text-gray-400" />,
    positive: true,
  },
  {
    title: "Homes Sold (30 Days)",
    value: "320",
    change: "+5.2% vs since last month",
    icon: <BarChart2 className="size-6 text-gray-400" />,
    positive: true,
  },
  {
    title: "Median Days on Market",
    value: "28",
    change: "-2 days vs last month",
    icon: <Clock className="size-6 text-gray-400" />,
    positive: true, // fewer days is usually positive in real estate
  },
  {
    title: "Market Trend",
    value: "+2.3%",
    change: "Strong upward trend",
    icon: <MoveUpRight className="size-6 text-gray-400" />,
    positive: true,
  },
];

export default function MarketStats() {
  return (
    <div className="pb-12 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col gap-4 text-left"
            >
              <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-100">
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-500 font-medium text-sm md:text-base mb-1">
                  {stat.title}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </h3>
              </div>
              <p
                className={`text-sm font-semibold ${
                  stat.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
