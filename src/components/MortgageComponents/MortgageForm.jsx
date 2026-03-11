"use client";

import Container from "@/common/Container";
import { useIdxScript } from "@/hooks/useIdxScript";

export default function MortgageForm() {
  useIdxScript();

  return (
    <div className="mt-26 py-10 lg:py-16">
      <Container>
        <div className="w-full space-y-10">
          {/* Header Section */}
          {/* <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-secondary capitalize">
              Mortgage <span className="text-muted-foreground">Calculator</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto font-montserrat">
              Plan your future home purchase with confidence. Use our calculator
              to estimate your monthly payments and see how different terms
              affect your budget.
            </p>
          </div> */}

          {/* Web4Realty IDX Component Container */}
          <div className="bg-[#FAF9F6] py-10 rounded-2xl border border-gray-100 shadow-sm w-full">
            <div
              id="mortgage_calculator"
              className="min-h-125 w-full"
              data-idx-component="IDXComponent"
              data-idx-props={JSON.stringify({
                sid: "idxcmp_8fM7R8RMDTaI9fiI9Hr2tQ",
                type: "mortgage_calculator",
              })}
            ></div>
          </div>

          {/* SEO/Instructional Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600 font-montserrat leading-relaxed">
            <div className="space-y-3">
              <h3 className="font-bold text-secondary uppercase">How to use</h3>
              <p>
                Enter the property price and your intended down payment. You can
                adjust interest rates and loan lengths (15, 20, or 30 years) to
                see how your monthly obligation changes.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-secondary uppercase">
                Why it matters
              </h3>
              <p>
                Understanding your Debt-to-Income (DTI) ratio is a crucial first
                step in the home buying process. Most lenders prefer a total DTI
                below 43%.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
