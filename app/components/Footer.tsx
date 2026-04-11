'use client';

import { poppins } from "../fonts";

import ThemeToggle from "./theme/ThemeToggle";

import { Github, Linkedin, Mail, ExternalLink } from "@deemlol/next-icons";

import { useState, useEffect } from "react";

const portfolioSections = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact", href: "/#contact" },
];

const friendlyMessages = [
    "Thanks for visiting! 🚀",
    "Let's build something amazing! ✨",
    "Always learning, always growing! 🌱",
    "Code with passion, create with purpose! 💻",
    "Feel free to reach out anytime! 👋"
];

export default function Footer() {
    const [randomMessage, setRandomMessage] = useState("");

    useEffect(() => {
        setRandomMessage(friendlyMessages[Math.floor(Math.random() * friendlyMessages.length)]);
    }, []);

    return (
        <footer className="bg-white dark:bg-slate-900 border-t-8 border-yellow-500 dark:border-blue-600 transition-colors">
            <div className="px-6 md:px-14 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
                        <div className="flex items-center mb-6">
                            <div className="mr-4 border-4 border-black dark:border-white p-1 bg-yellow-500 dark:bg-blue-600">
                                <img src="/favicon.ico" alt="logo" className="w-[40px] h-[40px]" />
                            </div>
                            <span className={`${poppins.className} text-4xl font-black dark:text-white uppercase tracking-tighter`}>
                                Portfolio
                            </span>
                        </div>
                        <ThemeToggle />
                    </div>

                    {/* Navigation Section */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-600 dark:text-blue-500 mb-6">
                            Sitemap
                        </h3>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-3">
                            {portfolioSections.map((section) => (
                                <li key={section.name}>
                                    <a
                                        href={section.href}
                                        className="group flex items-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all text-sm font-bold uppercase"
                                    >
                                        <span className="w-0 group-hover:w-4 transition-all duration-300 h-0.5 bg-yellow-500 dark:bg-blue-600 mr-0 group-hover:mr-2"></span>
                                        {section.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t-4 border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className={`${poppins.className} text-yellow-700 dark:text-blue-400 font-black text-xs uppercase tracking-widest`}>
                        {randomMessage}
                    </p>

                    <div className="text-center md:text-right">
                        <p className="text-gray-500 text-xs">
                            © {new Date().getFullYear()} Andrew Sameh. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}