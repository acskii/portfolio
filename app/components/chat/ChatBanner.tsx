'use client';

import { Sparkles2, ArrowRight } from "@deemlol/next-icons";
import Link from "next/link";

export function ChatBanner() {
    return (
        <Link href="/chat" className="group block bg-black dark:bg-white overflow-hidden py-2 border-b-4 border-yellow-500 dark:border-blue-600">
            <div className="flex whitespace-nowrap justify-center items-center">
                <div className="flex items-center gap-4 px-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white dark:text-black flex items-center gap-2">
                        <Sparkles2 size={14} className="text-yellow-400 dark:text-blue-600" />
                        Try out the interactive chat feature!
                    </span>
                    <ArrowRight size={12} className="text-white dark:text-black group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
        </Link>
    );
}