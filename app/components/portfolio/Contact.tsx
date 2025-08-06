'use client';

/* Font imports */
import { poppins } from "@/app/components/fonts";

/* Icon imports */
import { iconMap } from "@/app/components/icons";

/* Contacts JSON */
import contact from "@/app/contact.json";
import { createElement } from "react";
import CopyToClipboard from "../CopyToClipboard";

export default function Contact() {
    return (
        <div className="px-0 md:px-14">
            <div className="flex flex-row gap-2 items-center">
                <h1 className={`${poppins.className} border border-4 border-yellow-500 font-bold text-2xl w-50 text-center mb-5`}>
                    Contact
                </h1>
            </div>
            <div className="flex flex-col md:flex-row items-stretch max-h-screen">
                <div className="flex flex-row border border-4 border-yellow-500 max-w-screen min-w-60">
                    <div className="relative bg-gradient-to-br from-yellow-400 via-transparent to-yellow-600 w-full">
                        <div className="relative z-10 py-5 md:py-0 px-10 md:mb-10 w-full h-full flex items-center">
                            <div>
                                <h2 className={`${poppins.className} text-2xl font-bold mb-2`}>Get in touch</h2>
                                <p className={`${poppins.className} text-sm text-gray-600 leading-relaxed`}>
                                    You can contact me through any of these platforms:
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-yellow-500 rotate-45"></div>
                            <div className="absolute bottom-8 right-6 w-6 h-6 border border-yellow-500 rounded-full"></div>
                            <div className="absolute top-1/2 right-4 w-4 h-8 border border-yellow-500"></div>
                        </div>
                    </div>
                </div>
                    <div className="flex-1 min-w-60 md:min-w-100 max-w-screen border border-4 border-t-0 md:border-t-4 border-yellow-500 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-2 max-h-screen p-8 md:border-l-0">
                        {
                            contact.map((c) => {
                                const render = iconMap[c.contact.title];

                                return (
                                    <div className="" key={c.contact.title}>
                                        <div className="flex flex-row gap-1 items-center mb-2">
                                            {render && createElement(render, { size: 18 })}
                                            <h3 className="border border-2 border-amber-200 px-8 font-medium text-md">{c.contact.title}</h3>
                                        </div>
                                        <CopyToClipboard copy={c.contact.href} />
                                    </div>
                                );
                            })
                        }
                    </div>
            </div>
        </div>
    );
}