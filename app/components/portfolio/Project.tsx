'use client';

import { poppins } from "@/app/fonts";

import Link from "next/link";

import { ArrowUpRight, Clock } from "@deemlol/next-icons";

import { ProjectType } from "@/lib/data/mapper/ProjectMapper";

export default function Project({ projects }: { projects: ProjectType[] }) {
    // Only take the most recent 3
    const recentProjects = projects.slice(0, 3);

    return (
        <div className="px-0 md:px-14 py-16">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 id="projects" className={`${poppins.className} border-4 border-yellow-500 dark:border-blue-600 font-bold text-2xl px-4 py-1 inline-block mb-2 dark:text-blue-600`}>
                        Recent Projects
                    </h1>
                    <p className="text-gray-600 dark:text-black max-w-md">
                        A glimpse into my latest engineering and development work.
                    </p>
                </div>
                <Link href="/projects" className="hidden md:flex items-center gap-2 font-black text-yellow-600 dark:text-blue-500 hover:underline">
                    VIEW ALL <ArrowUpRight size={20} />
                </Link>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative border-l-4 border-yellow-500 dark:border-blue-600 ml-4 md:ml-0 md:grid md:grid-cols-3 md:border-l-0 md:border-t-4 gap-0">
                {recentProjects.map((project, index) => (
                    <div key={project.name} className="relative p-8 group">
                        {/* Timeline Node */}
                        <div className="absolute -left-[14px] top-10 md:-top-[14px] md:left-10 w-6 h-6 bg-yellow-500 dark:bg-blue-600 dark:text-blue-600 border-4 border-white dark:border-slate-900 rotate-45" />
                        
                        <div className="mb-4 flex items-center gap-2 text-xs font-bold text-yellow-600 dark:text-blue-400 uppercase tracking-widest">
                            <Clock size={14} />
                            {index === 0 ? "Latest" : "Previous"}
                        </div>

                        <h3 className={`${poppins.className} text-xl font-black mb-3 dark:text-blue-600 uppercase`}>
                            {project.name}
                        </h3>
                        
                        <p className="text-sm text-gray-600 dark:text-black mb-6 line-clamp-2">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.skills.slice(0, 3).map(skill => (
                                <span key={skill} className="text-xs border font-bold border-yellow-500 dark:border-blue-600 px-2 py-0.5 uppercase dark:text-blue-600">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Redirect to /projects#id */}
                        <Link 
                            href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-flex items-center gap-2 uppercase bg-yellow-500 dark:bg-blue-600 text-white px-4 py-2 font-black text-xs group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            Full Details <ArrowUpRight size={14} />
                        </Link>
                    </div>
                ))}
            </div>

            <Link href="/projects" className="md:hidden mt-8 uppercase flex justify-center items-center gap-2 font-black text-yellow-600 dark:text-blue-500">
                View All <ArrowUpRight size={20} />
            </Link>
        </div>
    );
}