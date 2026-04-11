'use client';

/* Font imports */
import { poppins } from "@/app/components/fonts";

/* Icon imports */
import { MapPin, Sparkles2 } from "@deemlol/next-icons";

/* React imports */
import { useState, useEffect, createElement } from "react";
import Spinner from "@/app/components/LoadingSpinner";
import { AboutItemType } from "@/lib/data/mapper/AboutMapper";
import { iconMap } from "../icons";
import { SkillType } from "@/lib/data/mapper/SkillMapper";

/* Types */
type GitHubResponse = {
    name: string;
    bio: string;
    avatar_url: string;
    login: string;
    location: string;
};

interface HeroProps {
    username: string;
    tidbits: AboutItemType[];
    skills: SkillType[];
    bio: string;
}


export default function Hero({ username, tidbits, skills, bio } : HeroProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<GitHubResponse | null>(null);
    const [error, setError] = useState<string>("");

    console.log(skills);

    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/${username}`);

                if (!response.ok) {
                    setError("Couldn't load GitHub user data");
                    return;
                }

                const user: GitHubResponse = await response.json();
                setUser(user);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, [username]);

    return (
            <section id="about" className="flex flex-col md:flex-row items-center gap-8 py-12 px-6 md:px-14">
                <div className="flex-1 bg-white dark:bg-slate-900 border-4 border-yellow-500 dark:border-blue-600 p-8">                        
                    {loading ? <Spinner /> : <></>}
                    {error != "" ? <span className="text-xl italic">{error}</span> : <></>}
                    <h1 className={`${poppins.className} text-3xl font-black mb-2 dark:text-white uppercase`}>
                        {user?.name}
                    </h1>
                    {user?.login && (
                        <p className="text-xl text-yellow-600 dark:text-blue-400 font-mono mb-6">
                            @{user?.login}
                        </p>
                    )}
                    {user?.bio && (
                        <div className="text-sm flex flex-col md:flex-row gap-1 items-start md:items-center leading-relaxed">
                            <Sparkles2 size={18} /> 
                            <span>{user.bio}</span>
                        </div>
                    )}  
                        
                    {
                        tidbits.map((t, index) => {
                            const render = iconMap[t.icon];

                            return (
                                <div key={index} className="text-sm flex flex-col md:flex-row gap-1 items-start md:items-center leading-relaxed">
                                    {render && createElement(render, { size: 18 })} 
                                    <span>{t.content}</span>
                                </div>
                            )
                        })
                    }

                    {user?.location && (
                        <div className="text-sm flex flex-row gap-1 items-start md:items-center leading-relaxed">
                            <MapPin size={18} /> 
                            <span>{user.location}</span>
                        </div>
                    )}

                    <hr className="my-2 h-0.5 border-t-0 bg-amber-200 dark:bg-blue-800" />

                    <p className="text-lg leading-relaxed dark:text-gray-300 mb-4">{bio}</p>

                    <div className="flex flex-wrap gap-3 mb-4">
                        {skills.map((skill, idx) => (
                            <div 
                                key={idx} 
                                className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 px-3 py-1.5 grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <img src={skill.image} alt={skill.name} className="w-5 h-5 object-contain" />
                                <span className="text-xs font-bold uppercase tracking-tighter dark:text-white">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a href="#contact" className="bg-yellow-500 dark:bg-blue-600 text-white px-6 py-3 font-bold transition-transform">
                            GET IN TOUCH
                        </a>
                        <a href="/email" className="border-4 border-yellow-500 dark:border-blue-600 px-6 py-3 font-bold dark:text-white">
                            SEND EMAIL
                        </a>
                    </div>
                </div>
                <div className="flex-1 max-w-md">                        
                    <img 
                        src={user ? user.avatar_url : "https://commons.wikimedia.org/wiki/File:Portrait_Placeholder.png"}
                        alt="Avatar"
                        className="rounded-none border-8 border-yellow-500 dark:border-blue-600 shadow-[20px_20px_0px_0px_rgba(159,90,30,1)] dark:shadow-[20px_20px_0px_0px_rgba(25,60,184,1)] w-full md:grayscale hover:grayscale-0 transition-all duration-500"                    />
                </div>
            </section>
    );
}