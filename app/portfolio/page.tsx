import About from "@/app/components/portfolio/About";
import Contact from "../components/portfolio/Contact";

export default function Page() {
    return (
        <>
            <div className="mb-20">
                <About username="acskii" />
            </div>
            <Contact />
        </>
    );
}