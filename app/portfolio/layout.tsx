
import NavBar from "@/app/components/portfolio/Navbar"
import ToTopButton from "@/app/components/ToTopButton";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <div className="p-8 dark:bg-violet-200">
                {children}
            </div>
            <ToTopButton />
        </>
    );
}