"use client";

import { useEffect } from "react";
import Container from "@/common/Container";

export default function MortgageForm() {
  useEffect(() => {
    // 1. Set global settings
    window.idxjsSettings = {
      token: "31250c8ca6754439eb82780e8c8016a338bf2f9e5697b53134e42ba951d87da4",
    };

    const scriptUrl = "https://idxjs.web4realty.com/";

    // 2. Clear existing script to avoid conflicts (standard precaution)
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) existingScript.remove();

    // 3. Append the script
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="mt-26 py-12 lg:py-20">
      <Container>
        <div className="w-full space-y-10">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-secondary uppercase">
              Mortgage <span className="text-muted-foreground">Calculator</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto font-montserrat">
              Plan your future home purchase with confidence. Use our calculator
              to estimate your monthly payments and see how different terms
              affect your budget.
            </p>
          </div>

          {/* Web4Realty IDX Component Container */}
          <div className="bg-[#FAF9F6] py-10 rounded-2xl border border-gray-100 shadow-sm">
            <div
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
