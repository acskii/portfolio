import Spinner from "./components/LoadingSpinner";

/* Font imports */
import { poppins } from "@/app/fonts";

export default function Loading() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <Spinner />
            <span className={`${poppins.className} font-bold text-2xl text-yellow-500 dark:text-white`}>Loading Content...</span>
        </div>
    );
}