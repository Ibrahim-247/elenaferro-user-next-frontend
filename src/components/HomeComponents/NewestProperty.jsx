import Container from "@/common/Container";
import PropertyCard from "@/common/PropertyCard";
import React from "react";

export default function NewestProperty() {
  return (
    <div className="bg-[#F8F7F4] py-12 lg:py-20">
      <Container>
        <div className="space-y-3 text-center">
          <h4 className="text-xl font-semibold text-secondary">JUST LISTED</h4>
          <p className="text-4xl lg:text-6xl font-semibold font-cormorant">
            NEWEST PROPERTIES
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-10 lg:my-14">
          {[...Array(3)].map((_, index) => (
            <PropertyCard key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}
