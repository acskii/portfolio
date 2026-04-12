import DataManager from "@/lib/data/DataManager";
import ChatSection from "../components/chat/ChatSection";
import { SkillType } from "@/lib/data/mapper/SkillMapper";
import { CertificateType } from "@/lib/data/mapper/CertificateMapper";

export default async function Chat() {
    await DataManager.load();
    const contacts = await DataManager.getContact();
    const about = await DataManager.getAbout();
    const skills = await DataManager.getSkills();
    const certificates = await DataManager.getCertificates();
    const projects = await DataManager.getProjects();

    const context = {
        general: about,
        contacts: contacts,
        skills: skills.map((s: SkillType) => s.name),
        certificates: certificates.map((c: CertificateType) => c.name),
        projects: projects,
    }

    return (
        <div className="min-h-screen">
            <ChatSection context={context}/>
        </div>
    );
}