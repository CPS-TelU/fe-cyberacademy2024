import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
