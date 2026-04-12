'use client';

import { useState } from 'react';
import { Send, Bot, AlertCircle } from "@deemlol/next-icons";
import { poppins } from '@/app/fonts';
import Spinner from '@/app/components/LoadingSpinner';

interface ChatSectionProps {
    context: any;
}

export default function ChatSection({ context }: ChatSectionProps) {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [messages, setMessages] = useState<{q: string, a: string}[]>([]);

    const handleAsk = async () => {
        if (!prompt.trim()) return;
        
        setError(false);
        setLoading(true);
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                body: JSON.stringify({ prompt: prompt, context: context }),
            });

            if (res.status == 500) {
                setError(true); 
            } else {
                const data = await res.json();

                // Add to top of list so newest is first
                setMessages([{ q: prompt, a: data.reply }, ...messages]);
                setPrompt("");
            }
        } catch (e) {
            console.error("Chat error: ", e);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <div className="py-12 px-6 md:px-14 lg:flex-row border-4 border-yellow-500 dark:border-blue-600 bg-white dark:bg-slate-900 shadow-[8px_8px_0px_0px_rgba(234,179,120,1)] dark:shadow-[8px_8px_0px_0px_rgba(120,99,235,1)]">
            <h2 className={`${poppins.className} text-4xl font-black uppercase mb-8 dark:text-white`}>
                Ask me<span className="text-yellow-500 dark:text-blue-600">_</span>
            </h2>

            {/* Input Box */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
                <input 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask me anything"
                    className="flex-1 border-4 border-black dark:border-white p-4 font-bold bg-white dark:bg-slate-900 dark:text-white outline-none focus:ring-4 ring-yellow-500/50 dark:ring-blue-600/60 transition-all"
                />
                <button 
                    onClick={handleAsk}
                    disabled={loading}
                    className="bg-yellow-500 dark:bg-blue-600 text-black dark:text-white border-4 border-black dark:border-white px-8 py-4 font-black uppercase flex items-center justify-center gap-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 transition-all"
                >
                    {loading ? <Spinner /> : <><Send size={20} /> ASK</>}
                    
                </button>
            </div>
            {error ? (<div className="border-4 border-red-500 p-4 bg-white dark:bg-slate-900 flex items-center gap-4">
                            <AlertCircle size={24} className="text-red-600 shrink-0" />
                            <p className="text-red-600 leading-relaxed font-semibold">
                                The chat bot is currently unavailable, please try again later..
                            </p>
                        </div>) : <></>}
        </div>
        <section>
            {/* Response History */}
            <div className="space-y-8">
                {messages.map((msg, i) => (
                    <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Question */}
                        <div className="border-4 border-yellow-500 dark:border-blue-600 p-6 bg-white dark:bg-slate-900 mb-2 mt-4">
                            <p className={`${poppins.className} text-sm md:text-md font-bold uppercase dark:text-gray-400`}>{msg.q}</p>
                        </div>
                        {/* Answer Block */}
                        <div className="border-4 border-yellow-500 dark:border-blue-600 p-6 bg-white dark:bg-slate-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
                            <div className="flex gap-4">
                                <div className="mr-4 border-4 border-black dark:border-white p-1 h-full bg-yellow-500 dark:bg-blue-600">
                                    <img src="../../../favicon.ico" alt="king_cat.ico" className="w-full md:w-[80px]" />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-bold md:text-lg">
                                    {msg.a}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}