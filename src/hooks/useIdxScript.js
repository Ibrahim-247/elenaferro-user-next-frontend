"use client";

import { useEffect } from "react";

export function useIdxScript(token = "31250c8ca6754439eb82780e8c8016a338bf2f9e5697b53134e42ba951d87da4") {
  useEffect(() => {
    window.idxjsSettings = { token };
    const scriptSrc = "https://idxjs.web4realty.com/";
    
    // Check for existing script and re-init or re-append
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script) script.remove();
    };
  }, [token]);
}
