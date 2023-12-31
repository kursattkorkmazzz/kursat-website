import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursat Korkmaz | Personal Website",
  description:
    "Developed by Kursat Korkmaz for pesonal purpose. <kursat.korkmaz123@hotmail.com>",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-montserrat bg-slate-100 text-sm">
        <Navbar className="hidden md:block" />
        {children}
        <Navbar className=" md:hidden" />
      </body>
    </html>
  );
}
