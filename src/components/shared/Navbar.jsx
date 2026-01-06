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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isColorBlack = pathname.includes("search");

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
    { name: "BUYERS", path: "/buyers" },
    { name: "SELLERS", path: "/sellers" },
    { name: "AGENT PLANS", path: "/plans" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? isColorBlack
              ? "shadow-lg bg-white"
              : "bg-black/90 shadow-lg backdrop-blur"
            : "bg-transparent"
        }
      `}
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
            {menuList.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="hover:text-secondary transition"
              >
                {item.name}
              </Link>
            ))}
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
