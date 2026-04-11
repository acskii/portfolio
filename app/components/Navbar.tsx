'use client';

import { useState } from 'react';

import Link from 'next/link';

import { poppins } from "@/app/fonts";

const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/certificates", label: "Certificates" },
];

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`${poppins.className} max-w-screen bg-yellow-400 dark:bg-indigo-950 min-h-20 flex flex-row justify-between items-center px-8 py-5 relative`}>
            <div className="flex flex-row gap-1 items-center">
                <div className="mr-4 border-4 border-black dark:border-white p-1 bg-yellow-500 dark:bg-blue-600">
                    <img src="../../../favicon.ico" alt="king_cat.ico" className="w-[40px] md:w-[60px]" />
                </div>
                <span className={`${poppins.className} text-4xl font-black dark:text-white uppercase tracking-tighter`}>
                    Portfolio
                </span>
            </div>

            <div className="hidden md:flex flex-row gap-5 px-4 py-1 text-xl text-white font-semibold">
                {navItems.map(({ href, label }) => (
                    <Link key={label} href={href} scroll={true}>
                        <h3 className="hover:text-amber-600 cursor-pointer dark:hover:text-blue-600">
                            {label}
                        </h3>
                    </Link>
                ))}
            </div>

            <button
                className="md:hidden flex items-center justify-center text-white focus:outline-none"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Toggle menu"
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={menuOpen
                            ? "M6 18L18 6M6 6l12 12" // X icon
                            : "M4 6h16M4 12h16M4 18h16" // Burger icon
                        }
                    />
                </svg>
            </button>

            {menuOpen && (
                <div className="absolute top-full right-0 w-40 text-white font-semibold bg-yellow-400 dark:bg-indigo-950 flex flex-col py-2 z-50 md:hidden">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            scroll={true}
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2 text-lg hover:text-amber-600 hover:bg-yellow-500 dark:hover:text-blue-500 dark:hover:bg-violet-700"
                        >
                            {label}
                            <hr className="my-2 h-0.5 border-t-0 bg-amber-200 dark:bg-violet-500" />
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}