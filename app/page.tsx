import HomeLayout from "../components/Layouts/HomeLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { poppins } from "@/styles/font";

export default function Home() {
  return (
    <main className={`${poppins.className} px-4 pt-12 z-[999]`}>
      <Header />
      <HomeLayout />
      <Footer />
    </main>
  );
}