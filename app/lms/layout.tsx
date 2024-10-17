import type { Metadata } from "next";
import "../globals.css";

import Footer from "@/components/Footer";
import NavbarLms from "@/components/Navbar";

export const metadata: Metadata = {
  title: "LMS Cyber Academy",
};
export default async function LmsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarLms  />
        {children}
        <Footer />
      </body>
    </html>
  );
}
