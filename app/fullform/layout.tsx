import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Registration Cyber Academy",
};
export default async function FullformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
