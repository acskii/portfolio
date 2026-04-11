
import DataManager from "@/lib/data/DataManager";

import { poppins } from "../components/fonts";

import Card from "../components/Card";
import { ProjectType } from "@/lib/data/mapper/ProjectMapper";

export default async function ProjectPage() {
    await DataManager.load();
    const projects = await DataManager.getProjects();

    return (
        <div className="min-h-screen">
                <h1 
                    className={`${poppins.className} border-4 border-yellow-500 dark:border-blue-600 font-bold text-2xl max-w-2xl mx-auto text-center mb-5 dark:text-blue-600`}
                >
                    Projects
                </h1>
                <div className="space-y-32">
                    {projects.map((project: ProjectType, index: number) => (
                        <Card key={project.name} project={project} index={index} />
                    ))}
            </div>
        </div>
    );
}