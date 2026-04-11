'use client';

import { poppins } from "@/app/fonts";
import Link from "next/link";
import { FileText, ArrowRight, Sparkles } from "@deemlol/next-icons";

export default function ResumeStrip() {
    return (
        <div className="relative w-full py-10 px-0 md:px-14 overflow-hidden">
            <Link href="/resume" className="group block">
                <div className="relative flex flex-col md:flex-row items-stretch border-t-4 border-b-4 md:border-4 border-yellow-500 dark:border-blue-600 bg-white dark:bg-slate-900 transition-all duration-300 group-hover:shadow-[8px_8px_0px_0px_rgba(234,179,120,1)] dark:group-hover:shadow-[8px_8px_0px_0px_rgba(120,99,235,1)]">
                    
                    {/* Left Side: Animated Badge */}
                    <div className="bg-yellow-500 dark:bg-blue-600 p-6 flex items-center justify-center md:w-64 overflow-hidden relative">
                        {/* Background Decorative Sparkle */}
                        <Sparkles className="absolute top-2 right-2 text-yellow-300/30 dark:text-blue-300/30" size={48} />
                        
                        <div className="relative z-10 flex flex-col items-center text-white">
                            <FileText size={40} className="mb-2 group-hover:scale-110 transition-transform" />
                            <span className={`${poppins.className} font-black text-xl tracking-tighter uppercase text-center`}>
                                View My Resume
                            </span>
                        </div>
                    </div>

                    {/* Middle Section: "Marquee" / Message */}
                    <div className="flex-1 flex flex-col justify-center p-6 md:px-10 overflow-hidden">
                        <div className="flex flex-col gap-1">
                            <h3 className={`${poppins.className} text-2xl font-black text-slate-800 dark:text-white uppercase italic flex items-center gap-3`}>
                                Looking for a Full-Stack Engineer?
                                <ArrowRight className="text-yellow-500 dark:text-blue-500 group-hover:translate-x-3 transition-transform" />
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium max-w-xl">
                                Currently seeking internships. Check out my technical experience!
                            </p>
                        </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-500 dark:bg-blue-600"></div>
                </div>
            </Link>
        </div>
    );
}