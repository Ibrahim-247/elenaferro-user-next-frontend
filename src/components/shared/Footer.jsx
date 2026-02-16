import logo from "../../assets/footer_logo.png";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { BsCaretRightFill } from "react-icons/bs";
import Container from "@/common/Container";

export default function Footer() {
  // footer data
  const footerData = {
    CONNECT: [
      {
        icon: <Phone />,
        label: "(404) 860-1060",
        href: "tel:4048601060",
      },
      {
        icon: <Mail />,
        label: "info@medlockrealty.com",
        href: "mailto:info@medlockrealty.com",
      },
      {
        icon: <MapPin />,
        label: "8735 Dunwoody Pl, Ste R Atlanta, GA 30350",
        href: "https://maps.google.com/?q=8735+Dunwoody+Pl,+Ste+R+Atlanta,+GA+30350",
      },
    ],

    NAVIGATION: [
      { label: "ABOUT US", href: "/about-us" },
      { label: "AGENT PLANS", href: "/agent-plans" },
      { label: "HOME BUYERS", href: "/home-buyers" },
      { label: "HOME SELLERS", href: "/home-sellers" },
      { label: "ARTICLES & INSIGHTS", href: "/articles" },
      { label: "CONTACT US", href: "/contact" },
      { label: "LOGIN/REGISTER", href: "/login" },
    ],

    RESOURCES: [
      { label: "ADVANCED SEARCH", href: "/advanced-search" },
      { label: "MAP SEARCH", href: "/map-search" },
      { label: "FEATURED PROPERTIES", href: "/featured-properties" },
      { label: "NEWEST PROPERTIES", href: "/newest-properties" },
      { label: "HOME VALUATION", href: "/home-valuation" },
      { label: "EMAIL LISTING ALERTS", href: "/email-alerts" },
      { label: "MORTGAGE CALCULATOR", href: "/mortgage-calculator" },
    ],
  };

  return (
    <div className="bg-primary text-white py-20">
      <Container>
        <Image src={logo} alt="logo" className="w-60" />
        <div className="my-10 flex flex-wrap space-y-5 justify-between text-base">
          {/* connect */}
          <div>
            <h5 className="text-2xl lg:text-3xl font-semibold font-cormorant mb-5">
              LET’S CONNECT
            </h5>
            <div className="font-normal space-y-3">
              {footerData?.CONNECT?.map((item, index) => (
                <a href="" className="flex items-center gap-2" key={index}>
                  <span>{item?.icon}</span> {item?.label}
                </a>
              ))}
            </div>
          </div>
          {/* NAVIGATION */}
          <div>
            <h5 className="text-2xl lg:text-3xl font-semibold font-cormorant mb-5">
              NAVIGATION
            </h5>
            <div className="tfont-normal space-y-3">
              {footerData?.NAVIGATION?.map((item, index) => (
                <a href="" className="flex items-center gap-2" key={index}>
                  <BsCaretRightFill className="text-secondary" />
                  {item?.label}
                </a>
              ))}
            </div>
          </div>
          {/* Resources */}
          <div>
            <h5 className="text-2xl lg:text-3xl font-semibold font-cormorant mb-5 uppercase">
              Resources
            </h5>
            <div className="font-normal space-y-3">
              {footerData?.RESOURCES?.map((item, index) => (
                <a href="" className="flex items-center gap-2" key={index}>
                  <BsCaretRightFill className="text-secondary" />
                  {item?.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm font-normal">
          MedlockRealty.com is a registered trademark. Equal Housing
          Opportunity. All information provided by the listing agent/broker is
          deemed reliable but is not guaranteed and should be independently
          verified. Information being provided is for consumers’ personal,
          non-commercial use and may not be used for any purpose other than to
          identify prospective properties consumers may be interested in
          purchasing.
        </p>
        <div className="mt-10 text-base font-normal flex-wrap space-y-2.5 sm:space-y-0 flex items-center justify-between">
          <p>© 2025 Medlock Realty. All rights reserved.</p>
          <div className="flex items-center gap-5 lg:gap-12 flex-wrap">
            <p>Terms of service</p>
            <p>Privacy policy</p>
            <p>Compliance Notice</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
