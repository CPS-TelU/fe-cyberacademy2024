import type { Metadata } from "next";
import "../globals.css";
import { poppins } from "@/styles/font";

export const metadata: Metadata = {
    title: "Dashboard",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
