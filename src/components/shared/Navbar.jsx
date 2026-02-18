"use client";
import Container from "@/common/Container";
import logo from "../../assets/footer_logo.png";
import logo2 from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useLogout } from "@/hooks/auth.api";
import { Spinner } from "../ui/spinner";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const user = useSelector((state) => state.auth.token);

  const isColorBlack =
    pathname.includes("search") ||
    pathname.includes("mortgage_calculator") ||
    pathname.includes("home_valuation") ||
    pathname.includes("contact") ||
    pathname.includes("insights");

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
    // {
    //   name: "AGENT PLANS",
    //   path: "https://elenaferro-agent.vercel.app/pricing",
    // },
    { name: "CONTACT", path: "/contact" },
  ];

  // log out
  const logoutMutation = useLogout();

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? isColorBlack
              ? "shadow-lg bg-white"
              : "bg-black/90 shadow-lg backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Image
                src={isColorBlack ? logo2 : logo}
                alt="logo"
                className="w-50 lg:w-64"
                priority
              />
            </Link>

            <div
              className={`hidden lg:flex items-center gap-6 xl:gap-11 text-base xl:text-lg font-normal ${
                isColorBlack ? "text-primary" : "text-white"
              }`}
            >
              {menuList.map((item, index) => {
                const active = pathname === item?.path;
                if (item.submenu) {
                  return (
                    <DropdownMenu key={index}>
                      <DropdownMenuTrigger asChild>
                        <span className="cursor-pointer hover:underline transition flex items-center gap-1">
                          {item.name} <ChevronDown className="size-4" />
                        </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="bg-white text-black mt-2 rounded-lg shadow-lg border-none"
                        side="bottom"
                        align="start"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <DropdownMenuItem
                            key={subIndex}
                            asChild
                            className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                          >
                            <Link href={subItem.path}>{subItem.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                } else {
                  return (
                    <Link
                      href={item.path}
                      key={index}
                      className={`hover:underline transition ${
                        active && "underline font-semibold"
                      }`}
                    >
                      {item.name}
                    </Link>
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
                <IoCallSharp className="cursor-pointer hover:text-secondary hidden sm:block" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-1"
              >
                <Menu className="size-8" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 z-70 h-full w-[80%] max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <Image src={logo2} alt="logo" className="w-40" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-black"
          >
            <LogOut className="rotate-180 size-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-150px)]">
          {menuList.map((item, index) => {
            if (item.submenu) {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-lg font-semibold text-gray-500">
                    {item.name}
                  </span>
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-secondary/20">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.path}
                        className="text-primary hover:text-secondary py-1"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            const isSearch = item?.name?.toLowerCase() === "search";
            if (isSearch) {
              return (
                <a
                  key={index}
                  href={item.path}
                  className="text-lg font-semibold text-primary hover:text-secondary py-2 border-b border-gray-100"
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={index}
                href={item.path}
                className="text-lg font-semibold text-primary hover:text-secondary py-2 border-b border-gray-100"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
          <IoCallSharp className="text-2xl text-secondary" />
          <span className="text-lg font-medium text-primary">
            Call Us Today
          </span>
        </div>
      </div>
    </>
  );
}
