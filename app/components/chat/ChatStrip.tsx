'use client';

import { poppins } from "@/app/fonts";
import { ArrowUpRight } from "@deemlol/next-icons";

export default function ChatStrip() {
    return (
        <section className="relative overflow-hidden bg-yellow-500 dark:bg-blue-600 border-y-8 border-black dark:border-white w-full py-6 px-6 px-0 mid:px-14">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                    <h2 className={`${poppins.className} text-4xl md:text-5xl font-black text-black dark:text-white uppercase leading-none mb-4 italic`}>
                        Got Questions? 
                        <br />
                        <span className="text-white dark:text-black">Ask Me.</span>
                    </h2>
                    <p className="max-w-xl text-black/80 dark:text-white/80 font-bold text-sm md:text-base leading-tight uppercase">
                        Trained on my technical stack, project history, and academic achievements. 
                        Get instant answers about my fit for your next project or team.
                    </p>
                </div>

                <div className="shrink-0">
                    <a 
                        href="/chat" 
                        className="group flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black p-6 md:p-8 border-4 border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] dark:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-0 active:translate-y-0 active:shadow-none"
                    >
                        <span className="text-2xl font-black uppercase tracking-tighter">Start Chat</span>
                        <div className="bg-yellow-500 dark:bg-blue-600 p-2 group-hover:rotate-45 transition-transform border-2 border-black dark:border-white">
                            <ArrowUpRight size={24} className="text-black dark:text-white" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}