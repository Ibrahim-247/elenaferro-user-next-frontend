"use client";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/common/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsCaretRightFill as Caret } from "react-icons/bs";

export default function Footer() {
  // footer data
  const footerData = {
    CONNECT: [
      {
        icon: <Phone size={20} />,
        label: "(404) 860-1060",
        href: "tel:4048601060",
      },
      {
        icon: <Mail size={20} />,
        label: "info@medlockrealty.com",
        href: "mailto:info@medlockrealty.com",
      },
      {
        icon: <MapPin size={20} />,
        label: "8735 Dunwoody Pl, Ste R Atlanta, GA 30350",
        href: "https://maps.google.com/?q=8735+Dunwoody+Pl,+Ste+R+Atlanta,+GA+30350",
      },
    ],

    NAVIGATION: [
      { label: "ABOUT US", href: "/about" },
      { label: "HOME BUYERS", href: "/buyers" },
      { label: "HOME SELLERS", href: "/sellers" },
      { label: "ARTICLES & INSIGHTS", href: "/blogs" },
      { label: "CONTACT US", href: "/contact" },
    ],

    RESOURCES: [
      { label: "ADVANCED SEARCH", href: "/search" },
      { label: "NEWEST PROPERTIES", href: "/#newest-properties" },
      { label: "HOME VALUATION", href: "/sellers/home_valuation" },
      { label: "MORTGAGE CALCULATOR", href: "/buyers/mortgage_calculator" },
    ],
  };

  return (
    <div className="bg-[#f2f1f0] py-12 lg:py-20 border-t-2 border-t-secondary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Image src={logo} alt="logo" className="w-52 md:w-60" />
            </motion.div>
          </Link>

          <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-base">
            {/* connect */}
            <div className="space-y-6">
              <h5 className="text-2xl lg:text-3xl font-semibold font-cormorant pb-2 inline-block">
                LET’S CONNECT
              </h5>
              <div className="font-normal space-y-4">
                {footerData?.CONNECT?.map((item, index) => (
                  <motion.div key={index} whileHover={{ x: 5 }}>
                    <Link
                      href={item?.href}
                      className="flex items-start gap-3 hover:text-secondary transition-colors"
                    >
                      <span className="mt-1 text-secondary">{item?.icon}</span>
                      <span className="max-w-62">{item?.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="space-y-6">
              <h5 className="text-2xl lg:text-3xl font-semibold font-cormorant pb-2 inline-block">
                NAVIGATION
              </h5>
              <div className="font-normal space-y-4">
                {footerData?.NAVIGATION?.map((item, index) => (
                  <motion.div key={index} whileHover={{ x: 5 }}>
                    <Link
                      href={item?.href}
                      className="flex items-center gap-2 hover:text-secondary transition-colors"
                    >
                      <Caret className="text-secondary size-3" />
                      {item?.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h5 className="text-2xl lg:text-3xl font-semibold font-cormorant pb-2 inline-block uppercase">
                Resources
              </h5>
              <div className="font-normal space-y-4">
                {footerData?.RESOURCES?.map((item, index) => (
                  <motion.div key={index} whileHover={{ x: 5 }}>
                    <Link
                      href={item?.href}
                      className="flex items-center gap-2 hover:text-secondary transition-colors"
                    >
                      <Caret className="text-secondary size-3" />
                      {item?.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-300">
            <p className="text-sm font-normal text-gray-600 leading-relaxed">
              MedlockRealty.com is a registered trademark. Equal Housing
              Opportunity. All information provided by the listing agent/broker
              is deemed reliable but is not guaranteed and should be
              independently verified. Information being provided is for
              consumers’ personal, non-commercial use and may not be used for
              any purpose other than to identify prospective properties
              consumers may be interested in purchasing.
            </p>

            <div className="mt-10 text-sm font-medium text-gray-500 flex flex-wrap gap-6 items-center justify-between">
              <p>© 2025 Medlock Realty. All rights reserved.</p>
              <div className="flex items-center gap-6 lg:gap-10 flex-wrap">
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Terms of service
                </Link>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Privacy policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Compliance Notice
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
