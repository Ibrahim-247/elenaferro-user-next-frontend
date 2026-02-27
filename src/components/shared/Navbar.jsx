"use client";

import Container from "@/common/Container";
import logo from "../../assets/footer_logo.png";
import logo2 from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { useLogout } from "@/hooks/auth.api";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // const user = useSelector((state) => state.auth.token);

  const isColorBlack =
    pathname.includes("search") ||
    pathname.includes("mortgage_calculator") ||
    pathname.includes("home_valuation") ||
    pathname.includes("contact") ||
    pathname.includes("insights") ||
    pathname.includes("blogs");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const menuList = [
    { name: "HOME", path: "/" },
    { name: "SEARCH", path: "/search" },
    { name: "ABOUT", path: "/about" },
    {
      name: "BUYERS",
      submenu: [
        { name: "Home Buyers", path: "/buyers" },
        { name: "Lending Partners", path: "/buyers/lending_partner" },
        { name: "Mortgage Calculator", path: "/buyers/mortgage_calculator" },
        { name: "Insights", path: "/buyers/insights" },
      ],
    },
    {
      name: "SELLERS",
      submenu: [
        { name: "Home Sellers", path: "/sellers" },
        { name: "Home Valuation", path: "/sellers/home_valuation" },
        { name: "Medlock Makeover", path: "/sellers/medlock_makeover" },
      ],
    },
    { name: "CONTACT", path: "/contact" },
    { name: "Agents", path: "https://admin.medlockrealty.com/auth/login" },
  ];

  // log out
  const logoutMutation = useLogout();

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? isColorBlack
              ? "shadow-lg bg-white"
              : "bg-[#4a4a4a]/90 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={isColorBlack ? logo2 : logo}
                  alt="logo"
                  className="w-50 lg:w-64"
                  priority
                />
              </motion.div>
            </Link>

            <div
              className={`hidden lg:flex items-center gap-6 xl:gap-11 text-sm xl:text-base font-medium ${
                isColorBlack ? "text-primary" : "text-white"
              }`}
            >
              {menuList.map((item, index) => {
                const active = pathname === item?.path;
                if (item.submenu) {
                  return (
                    <DropdownMenu key={index}>
                      <DropdownMenuTrigger asChild>
                        <motion.span
                          whileHover={{ y: -2 }}
                          className="cursor-pointer hover:text-secondary transition-colors flex items-center gap-1 uppercase"
                        >
                          {item.name} <ChevronDown className="size-4" />
                        </motion.span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="bg-white text-black mt-2 border-none p-0 shadow-xl rounded-none min-w-50"
                        side="bottom"
                        align="start"
                      >
                        <AnimatePresence>
                          {item.submenu.map((subItem, subIndex) => (
                            <DropdownMenuItem
                              key={subIndex}
                              asChild
                              className="hover:bg-secondary! hover:text-white! rounded-none cursor-pointer uppercase border-b border-gray-100 last:border-0 font-normal py-4 px-6"
                            >
                              <Link href={subItem.path}>{subItem.name}</Link>
                            </DropdownMenuItem>
                          ))}
                        </AnimatePresence>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                } else {
                  return (
                    <motion.div key={index} whileHover={{ y: -2 }}>
                      {item?.name === "SEARCH" ? (
                        <a
                          href={item.path}
                          className={`transition relative py-1 hover:text-secondary uppercase ${
                            active
                              ? "text-secondary border-b-2 border-secondary"
                              : ""
                          }`}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.path}
                          className={`transition relative py-1 hover:text-secondary uppercase ${
                            active
                              ? "text-secondary border-b-2 border-secondary"
                              : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  );
                }
              })}
            </div>

            <div
              className={`flex items-center gap-4 md:gap-6 ${
                isColorBlack ? "text-black" : "text-white"
              } text-xl md:text-2xl`}
            >
              <Link href="tel:4048601060">
                <motion.div
                  whileHover={{ scale: 1.1, color: "#B7A47C" }}
                  className="hidden sm:block"
                >
                  <IoCallSharp className="cursor-pointer" />
                </motion.div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-1 hover:text-secondary transition-colors"
              >
                <Menu className="size-8" />
              </button>
            </div>
          </div>
        </Container>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-70 h-full w-[85%] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <Image src={logo2} alt="logo" className="w-36" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-black hover:text-secondary transition-colors"
                >
                  <X className="size-8" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                {menuList.map((item, index) => {
                  if (item.submenu) {
                    return (
                      <div key={index} className="flex flex-col gap-3">
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">
                          {item.name}
                        </span>
                        <div className="flex flex-col gap-3 pl-4 border-l-2 border-secondary/20">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.path}
                              className="text-lg font-medium text-primary hover:text-secondary py-1 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={index}
                      href={item.path}
                      className="text-xl font-semibold text-primary hover:text-secondary py-2 border-b border-gray-100 transition-colors uppercase"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-8 bg-[#F8F7F4] flex items-center gap-4">
                <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <IoCallSharp className="text-2xl text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Have questions?
                  </p>
                  <Link
                    href="tel:4048601060"
                    className="text-lg font-bold text-primary hover:text-secondary transition-colors"
                  >
                    404-860-1060
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
