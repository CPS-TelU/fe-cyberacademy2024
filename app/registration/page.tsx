import { poppins } from "@/styles/font";
import RegistrationPage from "../../components/contents/Registration";


export default function Registration() {
    return (
        <main className={`${poppins.className} px-4 pt-12 z-[999]`}>
            <RegistrationPage/>
        </main>
    )

}