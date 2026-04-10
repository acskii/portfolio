
import DataManager from "@/lib/data/DataManager";

import Card from "../components/Card";
import { ProjectType } from "@/lib/data/mapper/ProjectMapper";

export default async function ProjectPage() {
    await DataManager.load();
    const projects = await DataManager.getProjects();

    return (
        <div className="space-y-32">
            {projects.map((project: ProjectType) => (
                <Card key={project.name} project={project} />
            ))}
        </div>
    );
}