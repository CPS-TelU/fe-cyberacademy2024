import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/styles/font";
import { METADATA } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    default: METADATA.title,
    template: `%s | ${METADATA.title}`,
  },
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: [
    {
      name: METADATA.authors.name,
      url: METADATA.authors.url,
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}