"use client";

import SearchHeader from "./SearchHeader";
import { useEffect } from "react";
import Container from "@/common/Container";

export default function SearchResult() {
  useEffect(() => {
    // 1. Set the global settings
    window.idxjsSettings = {
      token: "31250c8ca6754439eb82780e8c8016a338bf2f9e5697b53134e42ba951d87da4",
    };

    const scriptUrl = "https://idxjs.web4realty.com/";

    // 2. Remove existing script to force a fresh re-initialization
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // 3. Create and append the script manually
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Optional: Cleanup when leaving the page
      if (script) script.remove();
    };
  }, []);

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
            })}
          />
        </div>
      </Container>
    </div>
  );
}
