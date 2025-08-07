// TODO: to be cleaned up and decoupled

'use client';

import { poppins } from "@/app/components/fonts";
import { useState } from "react";

/* Type imports */
import { ProjectData } from "@/app/components/types";

export default function Card({ project }: { project: ProjectData }) {
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    // Extract known properties and additional dynamic properties
    const { preview, name, desc, skills, links, features, ...additionalProps } = project;

    // Filter out empty additional properties
    const dynamicFields = Object.entries(additionalProps).filter(
        ([key, value]) => value !== null && value !== undefined && value !== ""
    );

    const getRandomColor = () => {
        const colors = [
        'text-red-500', 'text-blue-500', 'text-green-500',
        'text-purple-500', 'text-pink-500', 'text-indigo-500', 'text-teal-500',
        'text-cyan-500', 'text-lime-500', 'text-amber-500',
        'text-emerald-500', 'text-violet-500', 'text-rose-500', 'text-sky-500',
        'text-red-600', 'text-blue-600', 'text-green-600',
        'text-purple-600', 'text-pink-600', 'text-indigo-600', 'text-teal-600',
        'text-red-400', 'text-blue-400', 'text-green-400',
        'text-purple-400', 'text-pink-400', 'text-indigo-400', 'text-teal-400'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const coloredText = desc.split('').map((char, index) => (
        <span key={index} className={getRandomColor()}>
        {char}
        </span>
    ));

    const toggleFeatures = () => {
        setFeaturesOpen(!featuresOpen);
    };
    
    const renderChipSection = (items: any[], label: string) => {
        if (!items || items.length === 0) return null;
        
        return (
            <div className="mb-4">
                <h4 className={`${poppins.className} font-semibold text-lg mb-2`}>
                    {label}
                </h4>
                <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                        <span 
                            key={index}
                            className="bg-amber-500 px-3 py-1 text-white text-sm font-semibold border-2 border-amber-800"
                        >
                            {typeof item === 'object' ? JSON.stringify(item) : item}
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    const renderBlockSection = (title: string, content: any) => {
        if (!content) return null;
        
        if (typeof content === 'object' && !Array.isArray(content)) {
            return (
                <div className="mb-4">
                    <h4 className={`${poppins.className} font-semibold text-lg mb-2 capitalize`}>
                        {title.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="bg-amber-800 p-2">
                        {Object.entries(content).map(([subKey, subValue]) => (
                            <div key={subKey}>
                                <h5 className="font-semibold text-yellow-300 mb-1">
                                    {subKey}
                                </h5>
                                <p className="text-white text-md ml-10 break-words overflow-auto">
                                    {String(subValue)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        } else if (Array.isArray(content)) {
            return renderChipSection(content, title);
        } else {
            return (
                <div className="mb-4">
                    <h4 className={`${poppins.className} font-semibold text-lg mb-2 capitalize`}>
                        {title.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="bg-amber-800 p-2">
                        <span className="text-yellow-300 font-semibold">{String(content)}</span>
                    </div>
                </div>
            );
        }
    };

    const renderLinksSection = () => {
        if (!links || Object.keys(links).length === 0) return null;
        
        return (
            <div className="mb-4">
                <h4 className={`${poppins.className} font-semibold text-lg mb-2`}>
                    Links
                </h4>
                <div className="flex flex-wrap gap-2">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onTouchStart={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            onTouchEnd={(e) => e.stopPropagation()}
                            className="bg-amber-500 font-semibold border-2 border-amber-700 hover:bg-yellow-600 px-3 py-2 transition-colors text-md flex items-center gap-1"
                        >
                            {link.name}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        );
    };

    const renderFeaturesSection = () => {
        if (!features || features.length == 0) return null;
        
        return (
            <>
                <button
                    onClick={toggleFeatures}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchMove={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 w-full text-left focus:outline-none"
                >
                    <h4 className={`${poppins.className} font-semibold text-lg text-white`}>
                        Features
                    </h4>
                    <svg
                        className={`w-5 h-5 text-white transition-transform duration-200 ${
                            featuresOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                    featuresOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}>
                    <div className="space-y-3">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-amber-800 p-2">
                                <div key={feature.header}>
                                    <h5 className="font-semibold text-yellow-300 mb-1">
                                        {feature.header}
                                    </h5>
                                    <p className="text-white text-md ml-10 break-words overflow-auto">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    };

    // Create tabs for mobile
    const tabs = [];
    if (skills && skills.length > 0) tabs.push({ name: 'Technologies', content: () => renderChipSection(skills, 'Technologies') });
    if (links && Object.keys(links).length > 0) tabs.push({ name: 'Links', content: renderLinksSection });
    dynamicFields.forEach(([key, value]) => {
        tabs.push({ name: key.replace(/([A-Z])/g, ' $1').trim(), content: () => renderBlockSection(key, value) });
    });
    if (features && features.length > 0) tabs.push({ name: 'Features', content: renderFeaturesSection });

    return (
        <>
            {/* Desktop Banner Layout */}
            <div className="hidden md:flex border-4 border-yellow-500 overflow-hidden mx-auto bg-yellow-400">
                {/* Left side - Preview Image */}
                <div className="w-1/3 bg-gray-800 flex items-center justify-center border-r-2 border-yellow-500">
                    {preview ? (
                        <img 
                            src={preview} 
                            alt={`${name} preview`}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="text-amber-400 text-center p-8">
                            <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            <p>Preview Image</p>
                        </div>
                    )}
                </div>

                {/* Right side - Content */}
                <div className="w-2/3 p-6 text-white">
                    {/* Project Name and Description */}
                    <div className="mb-4">
                        <h2 className={`${poppins.className} text-2xl font-bold mb-2`}>
                            {name}
                        </h2>
                        <p className={`${poppins.className} leading-relaxed break-words overflow-auto`}>
                            {desc}
                        </p>
                    </div>

                    <hr className="my-4 h-0.5 border-t-0 bg-yellow-200" />

                    {/* Chip Sections */}
                    {renderChipSection(skills, 'Technologies')}
                    {renderLinksSection()}

                    {/* Block Sections */}
                    {dynamicFields.map(([key, value]) => (
                        <div key={key}>
                            {renderBlockSection(key, value)}
                            <hr className="my-4 h-0.5 border-t-0 bg-yellow-200" />
                        </div>
                    ))}

                    {/* Features Section */}
                    {renderFeaturesSection()}
                </div>
            </div>

            {/* Mobile Tab Layout */}
            <div className="md:hidden border-4 border-yellow-500 overflow-hidden mx-auto">
                {/* Preview Image */}
                <div className="h-64 bg-gray-800 flex items-center justify-center border-b-2 border-yellow-500">
                    {preview ? (
                        <img 
                            src={preview} 
                            alt={`${name} preview`}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="text-amber-400 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            <p>Preview Image</p>
                        </div>
                    )}
                </div>

                {/* Project Name and Description */}
                <div className="bg-yellow-400 text-white p-4">
                    <h2 className={`${poppins.className} text-2xl font-bold mb-2`}>
                        {name}
                    </h2>
                    <p className={`${poppins.className} leading-relaxed break-words overflow-auto`}>
                        {coloredText}
                    </p>
                </div>

                {/* Tab Navigation */}
                {tabs.length > 0 && (
                    <>
                        <div className="flex overflow-x-auto bg-amber-500 border-b-2 border-yellow-500">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    onTouchStart={(e) => e.stopPropagation()}
                                    onTouchMove={(e) => e.stopPropagation()}
                                    onTouchEnd={(e) => e.stopPropagation()}
                                    className={`px-4 py-2 whitespace-nowrap font-semibold text-sm transition-colors border-r border-amber-600 last:border-r-0 ${
                                        activeTab === index 
                                            ? 'bg-yellow-400 text-white' 
                                            : 'text-white hover:bg-amber-400'
                                    }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="bg-yellow-400 text-white p-4 min-h-32">
                            {tabs[activeTab]?.content()}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}