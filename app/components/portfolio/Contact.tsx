'use client';

import { poppins } from "@/app/fonts";

import { createElement } from "react";

import { ContactType } from "@/lib/data/mapper/ContactMapper";

import { iconMap } from "@/app/icons";

import CopyToClipboard from "../CopyToClipboard";

interface ContactProps {
    contacts: ContactType[];
}

export default function Contact({ contacts }: ContactProps) {
    return (
        <div id="contact" className="px-0 md:px-14 py-10">
            <div className="flex flex-row gap-2 items-center mb-8">
                <h1 className={`${poppins.className} border-4 border-yellow-500 dark:border-blue-600 font-bold text-2xl px-6 py-1 dark:text-blue-600`}>
                    Contact
                </h1>
            </div>

            <div className="flex flex-col xl:flex-row items-stretch gap-8">
                <div className="flex-1 flex flex-col border-4 border-yellow-500 dark:border-blue-600 bg-white dark:bg-slate-900">
                    <div className="relative bg-gradient-to-br from-yellow-400 via-transparent to-yellow-600 dark:from-blue-600 dark:to-slate-900 p-10 border-b-4 border-yellow-500 dark:border-blue-600">
                        <h2 className={`${poppins.className} text-3xl font-black mb-2 dark:text-white uppercase`}>
                            Get in touch
                        </h2>
                        <p className={`${poppins.className} text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-md`}>
                            Reach out to me using:
                        </p>
                        
                        <div className="absolute top-0 right-0 p-4">
                            <div className="w-8 h-8 border-2 border-yellow-500 dark:border-blue-400 rotate-45 opacity-50"></div>
                        </div>
                    </div>

                    <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-slate-900">
                        {contacts.map((c) => {
                            const render = iconMap[c.title];
                            return (
                                <div className="group" key={c.title}>
                                    <div className="flex flex-row gap-1 items-center mb-2">
                                        {render && createElement(render, { size: 18 })}
                                        <h3 className="border-b-2 border-amber-200 dark:border-blue-900 px-2 font-bold text-sm uppercase dark:text-white">
                                            {c.title}
                                        </h3>
                                    </div>
                                    <CopyToClipboard copy={c.href} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}