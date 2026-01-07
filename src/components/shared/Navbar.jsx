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
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isColorBlack =
    pathname.includes("search") ||
    pathname.includes("mortgage_calculator") ||
    pathname.includes("home_valuation");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        { name: "Insights", path: "/buyers/plans" },
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
    { name: "AGENT PLANS", path: "/plans" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
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
          <Image
            src={isColorBlack ? logo2 : logo}
            alt="logo"
            className="w-64"
            priority
          />

          <div
            className={`hidden md:flex items-center gap-11 text-lg font-normal ${
              isColorBlack ? "text-primary" : "text-white"
            }`}
          >
            {menuList.map((item, index) => {
              const active = pathname === item?.path;
              if (item.submenu) {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <span className="cursor-pointer hover:underline transition flex items-center">
                        {item.name} <ChevronDown />
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-white text-black mt-2 rounded-lg shadow-lg"
                      side="bottom"
                      align="start"
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <DropdownMenuItem
                          key={subIndex}
                          asChild
                          className="hover:bg-gray-100"
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
                      active && "underline"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </div>

          <div className="flex items-center gap-6 text-white text-2xl">
            <IoCallSharp className="cursor-pointer hover:text-secondary" />
            <FaUserAlt className="cursor-pointer hover:text-secondary" />
          </div>
        </div>
      </Container>
    </div>
  );
}
