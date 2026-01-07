"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Container from "@/common/Container";

/* ---------------- MOCK DATA ---------------- */

const fullChartData = [
  { month: "JAN", price: 180000 },
  { month: "FEB", price: 420000 },
  { month: "MAR", price: 390000 },
  { month: "APR", price: 520000 },
  { month: "MAY", price: 500000 },
  { month: "JUN", price: 650000 },
  { month: "JUL", price: 350000 },
  { month: "AUG", price: 620000 },
  { month: "SEP", price: 480000 },
  { month: "OCT", price: 360000 },
  { month: "NOV", price: 520000 },
  { month: "DEC", price: 640000 },
];

const comparableHomes = [
  { address: "456 Oak Avenue", price: 539000, sqft: 2200, beds: 3, baths: 2 },
  { address: "789 Pine Street", price: 552000, sqft: 2100, beds: 3, baths: 2 },
  { address: "123 Maple Road", price: 565000, sqft: 2300, beds: 4, baths: 3 },
];

/* ---------------- COMPONENT ---------------- */

export default function ValuationForm() {
  const [showResult, setShowResult] = useState(false);
  const [estimate, setEstimate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // mock valuation logic
    const baseValue = 550000;
    setEstimate(baseValue);
    setShowResult(true);
  };

  const [range, setRange] = useState("6");
  const activeMonth = "JUN";

  const chartData = useMemo(() => {
    return range === "6" ? fullChartData.slice(0, 6) : fullChartData;
  }, [range]);

  return (
    <div className="w-full py-16 mt-26">
      <Container>
        <div className="space-y-16">
          {/* ---------------- HERO ---------------- */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-serif text-[#1E2A4A]">
              Find Out What <span className="text-[#9A9483]">Your Home</span> is
              Worth in Today’s Market
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a free, instant estimate based on real market data — no
              sign-up required.
            </p>
          </div>

          {/* ---------------- FORM ---------------- */}
          <div className="bg-[#FAF9F6] py-10">
            <Card className="max-w-xl mx-auto">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input placeholder="Property Address" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((b) => (
                          <SelectItem key={b} value={b.toString()}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4].map((b) => (
                          <SelectItem key={b} value={b.toString()}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Input placeholder="Square Footage" type="number" />
                  <Input placeholder="Year Built" type="number" />

                  <Button type="submit" className="w-full bg-[#9A9483]">
                    Get My Estimate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* ---------------- RESULT ---------------- */}
          {showResult && estimate && (
            <>
              {/* Estimated Value */}
              <Card className="max-w-3xl mx-auto text-center">
                <CardHeader>
                  <CardTitle>Estimated Home Value</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-4xl font-bold text-[#9A9483]">
                    ${estimate.toLocaleString()}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Lower</p>
                      <p className="font-semibold">
                        ${(estimate - 55000).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Estimate</p>
                      <p className="font-semibold">
                        ${estimate.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Higher</p>
                      <p className="font-semibold">
                        ${(estimate + 55000).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chart */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Average Home Price (Last 6 Months)</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      See how prices have moved over time.
                    </p>
                  </div>

                  {/* Month Filter */}
                  <Select value={range} onValueChange={(i) => setRange(i)}>
                    <SelectTrigger className="w-28">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 Month</SelectItem>
                      <SelectItem value="12">12 Month</SelectItem>
                    </SelectContent>
                  </Select>
                </CardHeader>

                <CardContent className="h-65">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} barCategoryGap={22}>
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        className="text-xs"
                      />

                      <Tooltip
                        cursor={{ fill: "transparent" }}
                        content={({ active, payload, label }) =>
                          active && payload?.length ? (
                            <div className="rounded-lg bg-white px-3 py-2 shadow text-xs">
                              <p className="font-medium">{label}</p>
                              <p>Price : ${payload[0].value}</p>
                            </div>
                          ) : null
                        }
                      />

                      <Bar dataKey="price" radius={[8, 8, 8, 8]}>
                        {chartData.map((entry, index) => (
                          <Cell
                            key={index}
                            fill={
                              entry.month === activeMonth
                                ? "#9A9483"
                                : "#D1D5DB"
                            }
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Comparable Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Comparable Properties Nearby</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Address</TableHead>
                          <TableHead>Sold Price</TableHead>
                          <TableHead>Sq Ft</TableHead>
                          <TableHead>Beds</TableHead>
                          <TableHead>Baths</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {comparableHomes.map((home, i) => (
                          <TableRow key={i}>
                            <TableCell>{home.address}</TableCell>
                            <TableCell>
                              ${home.price.toLocaleString()}
                            </TableCell>
                            <TableCell>{home.sqft}</TableCell>
                            <TableCell>{home.beds}</TableCell>
                            <TableCell>{home.baths}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
