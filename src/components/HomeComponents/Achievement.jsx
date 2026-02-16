import Container from "@/common/Container";
import React from "react";

export default function Achievement() {
  return (
    <div className="py-20">
      <Container>
        <div className="space-y-3 text-center">
          <p className="text-xl font-normal text-secondary">
            NUMBERS DON’T LIE
          </p>
          <h4 className="text-4xl lg:text-6xl font-semibold font-cormorant">
            OUR ACHIVEMENTS
          </h4>
        </div>
        <div className="grid grid-cols-3 mt-10 lg:mt-20">
          {[...Array(3)].map((_, index) => (
            <div className="space-y-1.5 text-center border-r-2 last:border-r-0">
              <h5 className="text-4xl lg:text-7xl font-bold text-secondary">
                $8M +
              </h5>
              <p className="text-lg font-normal text-[#928B7C]">Total Sales</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
