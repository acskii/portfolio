'use client';

/* React imports */
import { useState } from "react";

/* Font imports */
import { poppins } from "@/app/components/fonts";

/* Icon imports */
import { iconMap } from "@/app/components/icons";

/* Skills JSON */
import skill from "@/app/skill.json";

/* Component imports */
import ImageBox from "@/app/components/ImageBox";

/* Types */
type SkillContent = {
    name: string;
    spec?: string;
    image: string;
}

export default function Skill() {
    const [listStates, setListStates] = useState<Record<string, boolean>>({});

    const handleButton = (header: string) => {
        setListStates(prev => ({
            ...prev,
            [header]: !prev[header]
        }));
    };

    return (
        <div className="px-0 md:px-14">
            <div className="flex flex-row gap-2 items-center">
                <h1 className={`${poppins.className} border border-4 border-yellow-500 font-bold text-2xl w-50 text-center mb-5`}>
                    Skills
                </h1>
            </div>
            {
                skill.map( (skill) => {
                    return (
                        <div className="flex flex-col items-start mb-10" key={skill.header}>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center md:ml-20 mb-5">
                                <h3 className={`${poppins.className} border border-4 border-yellow-500 font-bold text-xl w-50 text-center`}>
                                    {skill.header}
                                </h3>
                                <button 
                                    type="button"
                                    className="text-center w-50 text-nowrap border border-2 border-yellow-500 bg-amber-400 px-2 text-lg font-bold text-white hover:bg-amber-500 hover:border-amber-600 hover:text-black"
                                    onClick={() => handleButton(skill.header)}
                                >
                                    Show { listStates[skill.header] ? "Images" : "List" }
                                </button>
                            </div>
                            <div 
                                className={`${listStates[skill.header] ? "hidden" : ""} grid md:grid-cols-10 gap-4 w-full md:ml-20 mt-2 md:mt-5`}
                            >   
                                {skill.content.map( (c, index) => {
                                    return (
                                        <ImageBox key={`${skill.header}-img-${index}`} name={c.name} image={c.image == "" ? "https://img.icons8.com/?size=100&id=68826&format=png&color=000000" : c.image} />
                                    );
                                })}
                            </div>
                            <div
                                className={`${!listStates[skill.header] ? "hidden" : ""} w-full md:ml-20 mt-2 md:mt-5`}
                            >
                                <ul className="grid grid-cols-1 md:grid-cols-10 gap-2">
                                    {skill.content.map((c: SkillContent, index) => {
                                        return (
                                            <li 
                                                key={`${skill.header}-text-${index}`}
                                            >
                                                <div className="flex flex-col gap-1 border border-2 border-yellow-500 bg-amber-400 px-2 text-lg font-bold text-white text-center">
                                                    <span>{c.name}</span>
                                                    {c.spec && <span>({c.spec})</span>}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })
            }
            
        </div>
    );
}