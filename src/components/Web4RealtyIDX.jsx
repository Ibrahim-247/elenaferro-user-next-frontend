"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const Web4RealtyIDX = () => {
  return (
    <>
      <Script id="idx-settings" strategy="beforeInteractive">
        {`
          window.idxjsSettings = {
            token: "31250c8ca6754439eb82780e8c8016a338bf2f9e5697b53134e42ba951d87da4"
          };
        `}
      </Script>

      <Script
        key={Date.now()}
        src="https://idxjs.web4realty.com/"
        strategy="afterInteractive"
      />

      <div id="idx-root" />
    </>
  );
};

export default Web4RealtyIDX;
