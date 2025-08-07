'use client';

import { useState } from 'react';
import Link from 'next/link';
import { poppins } from "@/app/components/fonts";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
];

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`${poppins.className} w-screen bg-yellow-400 dark:bg-indigo-950 min-h-20 flex flex-row justify-between items-center px-8 py-5 relative`}>
            <div className="flex flex-row gap-1 items-center">
                <img src="../../../favicon.ico" alt="king_cat.ico" className="w-[40px] md:w-[50px]" />
                <h1 className="text-white text-2xl md:text-3xl font-bold">Portfolio</h1>
            </div>

            <div className="hidden md:flex flex-row gap-5 px-4 py-1 text-xl text-white font-semibold">
                {navItems.map(({ href, label }) => (
                    <Link key={label} href={href} scroll={true}>
                        <h3 className="hover:text-amber-600 hover:cursor-pointer">
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
                            className="px-4 py-2 text-lg hover:text-amber-600 hover:bg-yellow-500"
                        >
                            {label}
                            <hr className="my-2 h-0.5 border-t-0 bg-amber-200" />
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}