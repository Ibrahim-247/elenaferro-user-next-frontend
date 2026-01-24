import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/provider/ReduxProvider";
import QueryProvider from "@/provider/QueryProvider";
import Web4RealtyIDX from "@/components/Web4RealtyIDX";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medlockrealty User",
  description: "Explore User",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <Toaster />
        <ReduxProvider>
          <QueryProvider>{children}</QueryProvider>{" "}
        </ReduxProvider>
      </body>
    </html>
  );
}
