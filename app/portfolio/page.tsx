import About from "@/app/components/portfolio/About";
import Contact from "@/app/components/portfolio/Contact";
import Project from "@/app/components/portfolio/Project";
import Skill from "@/app/components/portfolio/Skill";
import Certificate from "@/app/components/portfolio/Certificate";

export default function Page() {
    return (
        <>
            <div className="mb-20">
                <About username="acskii" />
            </div>
            <div className="mb-40 md:mb-20">
                <Contact />
            </div>
            <div className="mb-20">
                <Project />
            </div>
            <div className="mb-20">
                <Skill />
            </div>
        </>
    );
}