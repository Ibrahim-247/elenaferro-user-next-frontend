"use client";

import SearchHeader from "./SearchHeader";
import { useEffect } from "react";
import Container from "@/common/Container";
import { useSearchParams } from "next/navigation";

export default function SearchResult() {
  const searchParams = useSearchParams();

  const rawArea = searchParams.get("area");
  const area = rawArea ? decodeURIComponent(rawArea) : "";

  useEffect(() => {
    window.idxjsSettings = {
      token: "31250c8ca6754439eb82780e8c8016a338bf2f9e5697b53134e42ba951d87da4",
    };

    const scriptUrl = "https://idxjs.web4realty.com/";

    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      if (script) script.remove();
    };
  }, [area]);

  return (
    <div className="py-10 md:py-20 mt-16 md:mt-20 space-y-6 md:space-y-10">
      <SearchHeader />

      <Container>
        <div className="space-y-10">
          {/* New Preset Search Results Component */}
          <div
            className="w-full min-h-150"
            data-idx-component="IDXComponent"
            data-idx-props={JSON.stringify({
              sid: "idxcmp_057rTADtdDedDEk9aDdGID",
              type: "preset_search",
              area: area,
            })}
          />
        </div>
      </Container>
    </div>
  );
}
