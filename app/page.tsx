import HomeLayout from "../components/Layouts/HomeLayout";
import MyCourse from "../components/Layouts/MyCourse";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="pt-4">
      {/* <HomeLayout /> */}
      {/* <MyCourse /> */}
      <DashboardLayout />
    </main>
  );
}