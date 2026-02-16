"use client";
import Container from "@/common/Container";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { month: "JAN", price: 200000 },
  { month: "FEB", price: 420000 },
  { month: "MAR", price: 380000 },
  { month: "ABR", price: 550000 },
  { month: "MAY", price: 500000 },
  { month: "JUN", price: 650000 },
  { month: "JUL", price: 350000 },
  { month: "AUG", price: 620000 },
  { month: "SEP", price: 480000 },
  { month: "OCT", price: 360000 },
  { month: "NOV", price: 520000 },
  { month: "DEC", price: 640000 },
];

export default function PriceChart() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Average Home Price (Last 6 Months)
              </h3>
              <p className="text-gray-400 mt-1">See how prices have moved over time.</p>
            </div>
            <button className="bg-secondary/10 text-secondary-foreground font-semibold px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
              6 Month <ChevronDown className="size-4" />
            </button>
          </div>

          <div className="h-[300px] md:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F3F4F6"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 500 }}
                  dy={15}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 500 }}
                  dx={-10}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white border border-gray-100 shadow-xl p-3 rounded-xl flex flex-col gap-1">
                          <p className="text-xs font-bold text-gray-400 uppercase">
                            {label}
                          </p>
                          <p className="text-sm font-bold text-primary">
                            Price : {payload[0].value}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="price"
                  radius={[10, 10, 10, 10]}
                  barSize={12}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.month === "JUN" ? "#928b7c" : "#D1D5DB"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Container>
    </div>
  );
}
