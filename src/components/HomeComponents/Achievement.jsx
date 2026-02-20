import Container from "@/common/Container";
import React from "react";

export default function Achievement({ data }) {
  const achivements = [
    { name: "Total Sales", value: data?.total_sales || 0 },
    { name: "List to Sold Ratio", value: data?.list_of_sold_ratio || 0 },
    { name: "Years in Real Estate", value: data?.years_in_real_estate || 0 },
  ];
  return (
    <div className="py-12 lg:py-20">
      <Container>
        <div className="space-y-3 text-center">
          <p className="text-xl font-normal text-secondary">
            {data?.sub_title}
          </p>
          <h4 className="text-4xl lg:text-6xl font-semibold font-cormorant">
            {data?.title}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-10 lg:mt-20">
          {achivements?.map((item, index) => (
            <div
              key={index}
              className="space-y-1.5 text-center border-b-2 md:border-b-0 md:border-r-2 last:border-r-0 last:border-b-0 pb-10 md:pb-0"
            >
              <h5 className="text-4xl lg:text-7xl font-bold text-secondary">
                {item?.value}
              </h5>
              <p className="text-lg font-normal text-[#928B7C]">{item?.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
