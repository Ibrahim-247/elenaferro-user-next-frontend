import Container from "@/common/Container";

const tableData = [
  {
    area: "Atlanta",
    price: "$420k",
    sold: "320",
    days: "28 days",
    trend: "+2.3%",
    trendPositive: true,
  },
  {
    area: "Decatur",
    price: "$390k",
    sold: "280",
    days: "32 days",
    trend: "+1.1%",
    trendPositive: true,
  },
  {
    area: "Roswell",
    price: "$460k",
    sold: "210",
    days: "25 days",
    trend: "-0.8%",
    trendPositive: false,
  },
];

export default function MarketTable() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-6 text-gray-500 font-semibold text-lg">Area</th>
                <th className="py-6 text-gray-500 font-semibold text-lg">Avg Price</th>
                <th className="py-6 text-gray-500 font-semibold text-lg text-center">Homes Sold</th>
                <th className="py-6 text-gray-500 font-semibold text-lg text-center">Days on Market</th>
                <th className="py-6 text-gray-500 font-semibold text-lg text-right">Trend</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-8 font-bold text-xl text-primary">{row.area}</td>
                  <td className="py-8 font-medium text-lg text-gray-600">{row.price}</td>
                  <td className="py-8 font-medium text-lg text-gray-600 text-center">{row.sold}</td>
                  <td className="py-8 font-medium text-lg text-gray-600 text-center">{row.days}</td>
                  <td className={`py-8 font-bold text-lg text-right ${row.trendPositive ? "text-green-500" : "text-red-500"}`}>
                    {row.trend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
