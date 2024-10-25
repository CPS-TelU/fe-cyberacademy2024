import { poppins } from "@/styles/font";
import Fullform from "@/components/contents/fullform";


export default function Registration() {
    return (
        <main className={`${poppins.className} px-4 pt-12 z-[999]`}>
            <Fullform/>
        </main>
    )

}