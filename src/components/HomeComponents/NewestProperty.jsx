"use client";

import Container from "@/common/Container";
import PropertyCard from "@/common/PropertyCard";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function NewestProperty() {
  useEffect(() => {
    // 1. Define settings
    window.idxjsSettings = {
      token: "31250c8ca6754439eb82780e8c8016a338bf2f9e5697b53134e42ba951d87da4",
    };

    const scriptSrc = "https://idxjs.web4realty.com/";

    // 2. Check if script exists; if so, re-run its initialization
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (existingScript) {
      // If script is already there, we tell it to look for new components
      // Most IDX scripts have a 'render' or 'init' function.
      // If Web4Realty doesn't auto-watch, we re-append it to trigger execution.
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount to prevent memory leaks or duplicate listeners
      if (script) script.remove();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="newest-properties" className="bg-[#F8F7F4] py-12 lg:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-3 text-center"
        >
          <motion.h4
            variants={itemVariants}
            className="text-xl font-normal text-secondary font-montserrat"
          >
            JUST LISTED
          </motion.h4>
          <motion.p
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-semibold font-cormorant"
          >
            NEWEST PROPERTIES
          </motion.p>
        </motion.div>

        {/* Web4Realty IDX Component Container */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-10 lg:my-14"
        >
          {/* Note: Web4Realty's script looks for this specific div 
              and replaces/fills it with the property gallery.
          */}
          <div className="idx-container-wrapper">
            <div
              data-idx-component="IDXComponent"
              data-idx-props={JSON.stringify({
                sid: "idxcmp_TgkQIVr3VaYZ4Xmt17GUeq",
                type: "slider",
              })}
            ></div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
