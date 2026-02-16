"use client";
import SearchHeader from "./SearchHeader";
import { useEffect } from "react";
import Script from "next/script";
import Container from "@/common/Container";

export default function SearchResult() {
  useEffect(() => {
    window.idxjsSettings = {
      token: "31250c8ca6754439eb82780e8c8016a338bf2f9e5697b53134e42ba951d87da4",
    };
  }, []);
  return (
    <div className="py-10 md:py-20 mt-16 md:mt-20 space-y-6 md:space-y-10">
      <SearchHeader />
      <Container>
        <div
          className="w-full overflow-x-hidden min-h-[400px]"
          data-idx-component="IDXComponent"
          data-idx-props={JSON.stringify({
            sid: "idxcmp_B62fZ4ThDogpViv0udaZJt",
            type: "search_bar",
          })}
        />
      </Container>

      <Script src="https://idxjs.web4realty.com/" strategy="afterInteractive" />
    </div>
  );
}
