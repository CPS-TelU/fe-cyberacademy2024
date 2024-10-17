import LoginPage from "@/components/contents/Login";
import { poppins } from "@/styles/font";



export default function Login() {
    return (
        <main className={`${poppins.className} px-4 pt-12 z-[999]`}>
            <LoginPage/>
        </main>
    )

}