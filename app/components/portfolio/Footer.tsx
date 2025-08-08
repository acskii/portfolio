
'use client';
import { poppins } from "@/app/components/fonts";

const portfolioSections = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" }
];

const friendlyMessages = [
    "Thanks for visiting my portfolio! 🚀",
    "Let's build something amazing together! ✨",
    "Always learning, always growing! 🌱",
    "Code with passion, create with purpose! 💻",
    "Feel free to reach out anytime! 👋"
];

export default function Footer() {

    // Get a random friendly message
    const randomMessage = friendlyMessages[Math.floor(Math.random() * friendlyMessages.length)];

    return (
        <footer className="bg-gray-900 border-t-4 border-yellow-500">
            <div className="px-4 md:px-14 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center mr-3">
                                <img src="../../../favicon.ico" alt="king_cat.ico" className="w-[40px] md:w-[50px]" />
                            </div>
                            <span className={`${poppins.className} text-3xl font-bold text-white`}>
                                Portfolio
                            </span>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className={`${poppins.className} text-lg font-semibold text-yellow-500 mb-4`}>
                            Portfolio
                        </h3>
                        <ul className="space-y-2">
                            {portfolioSections.map((section) => (
                                <li key={section.name}>
                                    <a
                                        href={section.href}
                                        className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm"
                                    >
                                        {section.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="my-4 h-0.5 border-t-0 bg-yellow-500" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-yellow-500 font-medium text-sm">
                            {randomMessage}
                        </p>
                    </div>

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