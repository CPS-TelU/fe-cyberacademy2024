import HomeLayout from "../components/Layouts/HomeLayout";
import MyCourse from "../components/Layouts/MyCourse";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import AssignmentPageLayout from "../components/Layouts/AssignmentPageLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { poppins } from "@/styles/font";
import AddAssignmentPage from "@/components/Layouts/AddAssignmentPage";
export default function Home() {
  return (
    <main className={`${poppins.className} py-4`}>
      <Header />
      <HomeLayout />
      <Footer />
    </main>
  );
}