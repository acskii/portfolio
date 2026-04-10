import Hero from "@/app/components/portfolio/Hero";
import Contact from "@/app/components/portfolio/Contact";
import Project from "@/app/components/portfolio/Project";
import Certificate from "@/app/components/certificates/Certificate";
import ResumeStrip from "./components/resume/ResumeStrip";

import DataManager from "@/lib/data/DataManager";

export default async function Page() {
    await DataManager.load();
    const contacts = await DataManager.getContact();
    const about = await DataManager.getAbout();
    const certificates = await DataManager.getCertificates();
    const projects = await DataManager.getProjects();

    return (
        <>
            <div>
                <Hero username="acskii" tidbits={about.about} bio={about.bio}/>
            </div>
            <div className="mt-[-40]">
                <ResumeStrip />
            </div>
            <div>
                <Contact contacts={contacts} />
            </div>
            <div className="mb-20">
                <Project projects={projects} />
            </div>
            <div className="mb-20">
                <Certificate certificates={certificates} limit={4} />
            </div>
        </>
    );
}