'use client';

/* Font imports */
import { poppins } from "@/app/components/fonts";

/* Icon imports */
import { MapPin, House, Sparkles2, Book } from "@deemlol/next-icons";

/* React imports */
import { useState, useEffect } from "react";
import Spinner from "@/app/components/LoadingSpinner";

/* Types */
type GitHubResponse = {
    name: string;
    bio: string;
    avatar_url: string;
    company: string;
    login: string;
    location: string;
};


export default function About({ username } : { username: string }) {
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
                <h1 className={`${poppins.className} border border-4 border-yellow-500 font-bold text-2xl w-50 text-center mb-5`}>
                    About Me
                </h1>
                {loading ? <Spinner /> : <></>}
                {error != "" ? <span className="text-xl italic">{error}</span> : <></>}
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="flex flex-col flex-1 border border-4 border-yellow-500 p-2 md:p-4 h-60 w-80">
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
                    <div className="text-sm flex flex-col md:flex-row gap-1 items-start md:items-center leading-relaxed">
                        <Book size={18} /> 
                        <span>Studying <span className="font-semibold">Computer & Communication</span> at Alexandria University</span>
                    </div>
                    {user?.company && (
                        <p className="text-sm flex flex-row gap-1 items-center">
                            <House size={18} /> {user.company}
                        </p>
                    )}
                    {user?.location && (
                        <p className="text-sm flex flex-row gap-1 items-center">
                            <MapPin size={18} /> {user.location}
                        </p>
                    )}
                    <hr className="my-2 h-0.5 border-t-0 bg-amber-200" />
                    <p className="wrap-anywhere overflow-auto">
                        Hey, I’m Andrew — an engineer who enjoys turning ideas into working software. 
                        I’ve always been curious about how things work, which led me to explore full-stack development with Java, 
                        Spring Boot, and React. 
                        I like building clean interface, and learning something new with every project.
                    </p>
                </div>
                <img 
                    src={user ? user.avatar_url : "https://commons.wikimedia.org/wiki/File:Portrait_Placeholder.png"}
                    alt="Avatar"
                    className="max-w-80 max-h-80 md:w-60 md:h-60 object-cover border border-4 border-t-0 md:border-t-4 md:border-l-0 border-yellow-500" 
                />
            </div>
        </div>
    );
}