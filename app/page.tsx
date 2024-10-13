import LoginPage from "@/components/contents/Login";
import RegisterPage from "@/components/contents/Register";
import HomeLayout from "../components/Layouts/HomeLayout";

export default function Home() {
  return (
    <main className="pt-4">
      {/* <HomeLayout /> */}
      <LoginPage />
      {/* <RegisterPage /> */}
    </main>
  );
}