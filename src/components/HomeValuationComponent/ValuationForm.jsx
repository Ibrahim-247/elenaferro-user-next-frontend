"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/common/Container";

export default function ValuationForm() {
  useEffect(() => {
    // 1. Set global settings for the IDX script
    window.idxjsSettings = {
      token: "31250c8ca6754439eb82780e8c8016a338bf2f9e5697b53134e42ba951d87da4",
    };

    const scriptUrl = "https://idxjs.web4realty.com/";

    // 2. Force a fresh script load on every mount
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) existingScript.remove();

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
    <div className="w-full py-16 mt-16 md:mt-26">
      <Container>
        <div className="space-y-16">
          {/* ---------------- HERO ---------------- */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-serif text-[#1E2A4A] uppercase tracking-tight">
              Find Out What <span className="text-[#9A9483]">Your Home</span> is
              Worth
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get a professional home valuation report based on current market
              trends and local comparable sales.
            </p>
          </div>

          {/* ---------------- IDX FORM CONTAINER ---------------- */}
          <div className="bg-[#FAF9F6] py-10 rounded-2xl border border-gray-100 shadow-sm">
            <Card className="max-w-2xl mx-auto border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                {/* Web4Realty Component 
                  The script will automatically inject the form into this div.
                */}
                <div
                  className="min-h-100 w-full"
                  data-idx-component="IDXComponent"
                  data-idx-props={JSON.stringify({
                    sid: "idxcmp_NFcQDu9KcQDMFCd3N2reiU",
                    type: "form",
                  })}
                ></div>
              </CardContent>
            </Card>
          </div>

          {/* ---------------- INFO FOOTER ---------------- */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-400 italic">
              *Our automated valuation provides an estimate based on public
              records. For a more precise market analysis, contact our team for
              a personal consultation.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
