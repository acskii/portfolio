
import NavBar from "@/app/components/portfolio/Navbar"
import ToTopButton from "@/app/components/ToTopButton";
import Footer from "@/app/components/portfolio/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <div className="p-8 dark:bg-violet-200">
                {children}
            </div>
            <ToTopButton />
            <Footer />
        </>
    );
}