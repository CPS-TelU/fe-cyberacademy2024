import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Login Cyber Academy",
};
export default async function LoginLayout({
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
