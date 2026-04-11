'use client';

import { poppins } from "@/app/components/fonts";
import { ProjectType } from "@/lib/data/mapper/ProjectMapper";
import { ArrowUpRight, Box, ChevronDown, Cpu } from "@deemlol/next-icons";
import { useState, useEffect } from "react";

interface CardProps {
    project: ProjectType;
    index: number;
}

export default function Card({ project, index }: CardProps) {
    const { preview, name, desc, skills, links, features, ...additionalProps } = project;
    const projectId = name.toLowerCase().replace(/\s+/g, '-');

    const [isSpecsOpen, setIsSpecsOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

    // Automatically open properties on larger screens
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 1024) {
                setIsSpecsOpen(true);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const dynamicFields = Object.entries(additionalProps).filter(
        ([_, value]) => value !== null && value !== undefined && value !== ""
    );

    const renderFlexibleAttribute = (label: string, value: any) => {
        const items = Array.isArray(value) ? value : [value];
        return (
            <div key={label} className="mb-4 last:mb-0">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-yellow-600 dark:text-blue-500 mb-2">
                    {label.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                    {items.map((item, idx) => (
                        <span key={idx} className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 px-2 py-0.5 text-[11px] font-bold dark:text-white">
                            {String(item)}
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div id={projectId} className="mb-20 scroll-mt-24">
            <div className="flex flex-col lg:flex-row border-4 border-yellow-500 dark:border-blue-600 bg-white dark:bg-slate-900 shadow-[8px_8px_0px_0px_rgba(234,179,120,1)] dark:shadow-[8px_8px_0px_0px_rgba(120,99,235,1)]">
                {/* Visual Side */}
                <div className="lg:w-2/5 flex justify-center items-center min-h-[300px] border-b-4 lg:border-b-0 lg:border-r-4 border-yellow-500 dark:border-blue-600 bg-slate-50 dark:bg-slate-800">
                    {preview ? (
                        <img src={preview} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="text-amber-400 dark:text-blue-600 text-center p-8">
                            <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            <p>Preview Image</p>
                        </div>
                    )}
                </div>

                {/* Content Side */}
                <div className="relative lg:w-3/5 p-6 md:p-10">
                    <span className={`${poppins.className} absolute right-0 top-0 font-bold text-2xl px-4 py-2 border-t-0 border-r-0 border-4 border-yellow-500 dark:border-blue-600 bg-slate-50 dark:bg-slate-800`}>
                        {index + 1}
                    </span>

                    <h2 className={`${poppins.className} text-3xl font-black dark:text-white uppercase mb-4`}>
                        {name}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                        {desc}
                    </p>

                    {/* Properties Section */}
                    <div className="mb-4 border-2 border-slate-100 dark:border-slate-800">
                        <button 
                            onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                            className="w-full flex cursor-pointer items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-yellow-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                            <span className="flex items-center gap-2 font-black text-xs uppercase tracking-widest dark:text-white">
                                <Cpu size={16} className="text-yellow-600 dark:text-blue-500" /> Properties
                            </span>
                            <ChevronDown className={`transition-transform duration-300 ${isSpecsOpen ? 'rotate-180' : ''}`} size={18} />
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSpecsOpen ? 'max-h-[1000px] p-4 opacity-100 border-t-2 border-slate-100 dark:border-slate-800' : 'max-h-0 opacity-0'}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderFlexibleAttribute("Technologies", skills)}
                                {dynamicFields.map(([key, value]) => renderFlexibleAttribute(key, value))}
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    {features && features.length > 0 && (
                        <div className="mb-8 border-2 border-slate-100 dark:border-slate-800">
                            <button 
                                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                                className="w-full flex cursor-pointer items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-yellow-50 dark:hover:bg-blue-900/20 transition-colors"
                            >
                                <span className="flex items-center gap-2 font-black text-xs uppercase tracking-widest dark:text-white">
                                    <Box size={16} className="text-yellow-600 dark:text-blue-500" /> Key Features
                                </span>
                                <ChevronDown className={`transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : ''}`} size={18} />
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isFeaturesOpen ? 'max-h-[1000px] p-4 opacity-100 border-t-2 border-slate-100 dark:border-slate-800' : 'max-h-0 opacity-0'}`}>
                                <div className="space-y-4">
                                    {features.map((f, i) => (
                                        <div key={i} className="border-l-2 border-yellow-500 dark:border-blue-600 pl-4">
                                            <p className="font-bold text-sm text-yellow-700 dark:text-blue-400">{f.header}</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Action Links */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t-2 border-slate-100 dark:border-slate-800">
                        {links.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 font-black text-[10px] tracking-widest hover:bg-yellow-500 dark:hover:bg-blue-600 dark:hover:text-white transition-all transform active:scale-95"
                            >
                                {link.name.toUpperCase()} <ArrowUpRight size={14} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}