import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Header from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="relative flex flex-col items-center justify-center px-4 pt-20 z-[999]">
      {/* <Button variant={"ghost"} asChild className="w-full justify-start">
        <Link href={"/"}>Dashboard</Link>
      </Button> */}
      <DashboardLayout />
    </main>
  );
}
