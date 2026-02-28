import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/provider/ReduxProvider";
import QueryProvider from "@/provider/QueryProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medlock Realty - Atlanta Real Estate Specialists",
  description: "Explore User",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
        <Toaster />
        <ReduxProvider>
          <QueryProvider>{children}</QueryProvider>{" "}
        </ReduxProvider>
      </body>
    </html>
  );
}
