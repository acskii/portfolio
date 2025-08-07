'use client';

import { useEffect, useState } from "react";

export default function ToTopButton() {
    const [visible, setVisible] = useState(false);

    // Show button when user scrolls down
    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 100);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                fixed bottom-6 right-6 z-50
                bg-amber-500 dark:bg-indigo-700 text-white
                hover:bg-amber-600 dark:hover:bg-indigo-800
                flex items-center justify-center
                transition-all text-lg
                w-12 h-12 md:w-16 md:h-16
            `}>
            {/* Up arrow SVG */}
            <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                />
            </svg>
        </button>
    );
}