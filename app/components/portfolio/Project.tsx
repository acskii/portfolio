'use client';
import { poppins } from "@/app/components/fonts";
import { useState, useEffect, useRef } from "react";
import Card from "@/app/components/Card";
import project from "@/app/project.json";
import Spinner from "@/app/components/LoadingSpinner";

/* Type imports */
import { ProjectData } from "@/app/components/types";

export default function Project() {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    useEffect(() => {
        const loadProjects = () => {
            setProjects(project);
            setLoading(false);
        };
        
        loadProjects();
    }, []);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        // Check if the touch target is an interactive element
        const target = e.target as HTMLElement;
        const isInteractive = target.closest('button, a, [role="button"]');
        
        if (!isInteractive) {
            touchStartX.current = e.touches[0].clientX;
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        // Check if the touch target is an interactive element
        const target = e.target as HTMLElement;
        const isInteractive = target.closest('button, a, [role="button"]');
        
        if (!isInteractive && touchStartX.current) {
            touchEndX.current = e.touches[0].clientX;
        }
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && projects.length > 1) {
            nextProject();
        }
        if (isRightSwipe && projects.length > 1) {
            prevProject();
        }
        
        // Reset touch coordinates
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    return (
        <div className="px-0 md:px-14">
            <div className="flex flex-row gap-2 items-center">
                <h1 id="projects" className={`${poppins.className} border border-4 border-yellow-500 font-bold text-2xl w-50 text-center mb-5`}>
                    Projects
                </h1>
                {loading ? <Spinner /> : <></>}
                {projects.length == 0 && !loading ? 
                    <h2 className={`${poppins.className} border border-4 border-yellow-500 font-bold text-xl text-center mb-5 px-2`}>
                        No projects listed
                    </h2> 
                : <></>}
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-stretch">
                <div className="overflow-hidden flex-1">
                    <div 
                        className="flex items-center transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-full transition-opacity duration-300 ${
                                        index === currentIndex ? 'opacity-100' : 'opacity-30'
                                    }`}
                                >
                                    <Card project={project} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div 
                    className="overflow-hidden w-full"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-full transition-opacity duration-300 ${
                                        index === currentIndex ? 'opacity-100' : 'opacity-30'
                                    }`}
                                >
                                    <Card project={project} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            
            {projects.length > 1 && <div className="flex flex-row gap-2 items-center justify-center mt-5">
                <button
                    onClick={prevProject}
                    className="flex items-center justify-center bg-amber-400 hover:bg-amber-500 transition-colors px-4"
                    disabled={projects.length <= 1}
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                    <div className="flex flex-row gap-2 mx-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 transition-colors ${
                                    index === currentIndex 
                                        ? 'bg-yellow-500' 
                                        : 'bg-gray-400 hover:bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                <button
                    onClick={nextProject}
                    className="flex items-center justify-center bg-amber-400 hover:bg-amber-500 transition-colors px-4"
                    disabled={projects.length <= 1}
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div> }
        </div>
    );
}