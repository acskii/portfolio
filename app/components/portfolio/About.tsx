'use client';

/* Font imports */
import { poppins } from "@/app/components/fonts";

/* Icon imports */
import { MapPin, House, Sparkles2, Book } from "@deemlol/next-icons";

/* React imports */
import { useState, useEffect, createElement } from "react";
import Spinner from "@/app/components/LoadingSpinner";
import { AboutItemType } from "@/lib/data/mapper/AboutMapper";
import { iconMap } from "../icons";

/* Types */
type GitHubResponse = {
    name: string;
    bio: string;
    avatar_url: string;
    login: string;
    location: string;
};


export default function About({ username, tidbits, bio } : { username: string, tidbits: AboutItemType[], bio: string }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<GitHubResponse | null>(null);
    const [error, setError] = useState<string>("");

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
        <div className="px-0 md:px-14">
            <div className="flex flex-row gap-2 items-center">
                <h1 id="about" className={`${poppins.className} border border-4 border-yellow-500 font-bold text-2xl w-50 text-center mb-5`}>
                    About Me
                </h1>
                {loading ? <Spinner /> : <></>}
                {error != "" ? <span className="text-xl italic">{error}</span> : <></>}
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="flex flex-col flex-1 border border-4 border-yellow-500 p-2 md:p-4 min-w-60 h-60">
                    <h2 className={`${poppins.className} text-2xl md:text-left text-center font-bold`}>
                        {user?.name}
                    </h2>
                    {user?.login && (
                        <p className="text-lg text-gray-400">
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
                        <div className="text-sm flex flex-col md:flex-row gap-1 items-start md:items-center leading-relaxed">
                            <MapPin size={18} /> 
                            <span>{user.location}</span>
                        </div>
                    )}

                    <hr className="my-2 h-0.5 border-t-0 bg-amber-200" />

                    <p className="wrap-anywhere overflow-auto">{bio}</p>
                </div>
                <img 
                    src={user ? user.avatar_url : "https://commons.wikimedia.org/wiki/File:Portrait_Placeholder.png"}
                    alt="Avatar"
                    className="max-h-60 max-w-60 w-60 h-60 object-cover border border-4 border-t-0 md:border-t-4 md:border-l-0 border-yellow-500" 
                />
            </div>
        </div>
    );
}