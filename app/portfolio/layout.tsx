
import NavBar from "@/app/components/portfolio/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <div className="p-8 dark:bg-violet-200">
                {children}
            </div>
        </>
    );
}