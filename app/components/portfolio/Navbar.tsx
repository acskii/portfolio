import { poppins } from "@/app/components/fonts";

export default function NavBar() {
    return (
        <div className={`${poppins.className} w-screen bg-yellow-400 dark:bg-indigo-950 min-h-20 flex flex-row justify-between px-8 py-5`}>
            <div className="flex flex-row gap-1 items-center">
                <img src="../../../favicon.ico" alt="king_cat.ico" className="basis-sm w-[40] md:w-[50]" />
                <h1 className="text-white text-2xl md:text-3xl font-bold basis-lg">Portfolio</h1>
            </div>
        </div>
    );
}