import Container from "@/common/Container";
import PropertyCard from "@/common/PropertyCard";
import React from "react";

export default function NewestProperty() {
  return (
    <div className="bg-[#F8F7F4] py-20">
      <Container>
        <div className="space-y-3 text-center">
          <h4 className="text-xl font-semibold text-secondary">JUST LISTED</h4>
          <p className="text-6xl font-semibold font-cormorant">
            NEWEST PROPERTIES
          </p>
        </div>
        <div className="grid-cols-3 grid gap-9 my-14">
          {[...Array(3)].map((_, index) => (
            <PropertyCard key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}
