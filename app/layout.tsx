import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import NotificationBar from "@/components/NotificationBar";
import Navbar from "@/components/layout/Navbar";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

const integralCf = localFont({
  src: "../public/fonts/Integral-cf.otf",
  variable: "--font-integralCf",
});

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Find Clothes That Matches Your Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${integralCf.variable}`}>
        <NotificationBar />
        <Navbar />
        <div className="container">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
