import About from "@/app/components/portfolio/About";
import Contact from "@/app/components/portfolio/Contact";
import Project from "@/app/components/portfolio/Project";
import Skill from "@/app/components/portfolio/Skill";
import Certificate from "@/app/components/portfolio/Certificate";

import DataManager from "@/lib/data/DataManager";

export default async function Page() {
    await DataManager.load();
    const contacts = await DataManager.getContact();
    const about = await DataManager.getAbout();

    return (
        <>
            <div className="mb-20">
                <About username="acskii" tidbits={about.about} bio={about.bio}/>
            </div>
            <div className="mb-40 md:mb-20">
                <Contact contacts={contacts} />
            </div>
            <div className="mb-20">
                <Project />
            </div>
            <div className="mb-20">
                <Skill />
            </div>
            <div className="mb-20">
                <Certificate />
            </div>
        </>
    );
}