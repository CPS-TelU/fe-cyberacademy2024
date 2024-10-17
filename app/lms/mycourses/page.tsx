import MyCoursesPage from "@/components/Layouts/MyCourse";
import { poppins } from "@/styles/font";


export default function course() {
    return (
      <main className="relative flex flex-col items-center justify-center px-4 pt-24 z-[999]">
        <MyCoursesPage/>
      </main>
    );
  }