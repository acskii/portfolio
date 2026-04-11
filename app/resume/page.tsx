
import DataManager from "@/lib/data/DataManager";

import { poppins } from "../fonts";
import Resume from "../components/resume/Resume";
import { XCircle } from "@deemlol/next-icons";

export default async function ResumePage() {
    await DataManager.load();
    const resume = await DataManager.getResume();
    
    if (!resume) return (
        <div className="max-w-2xl flex flex-col gap-2 items-center mx-auto p-10 bg-white dark:bg-slate-900 border-4 border-yellow-500 dark:border-blue-600">
            <XCircle size={40} />
            <h2 className="text-3xl font-bold mb-6 dark:text-white">No resume provided</h2>
        </div>
    );

    return (
        <div className="min-h-screen">
            <div className="flex flex-row gap-2 items-center mb-8">
                <h1 className={`${poppins.className} border-4 border-yellow-500 dark:border-blue-600 font-bold text-2xl px-6 py-1 dark:text-blue-600`}>
                    Resume
                </h1>
            </div>
            {resume && <Resume resumeId={resume.id} /> }
        </div>
    );
}