
import { Download } from "@deemlol/next-icons";

interface ResumeProps {
    resumeId: string;
}

export default function Resume({ resumeId } : ResumeProps) {
    /* These URLs can only work if the content on Google Drive is set as "Anyone with the link" publicity */
    const getDownloadUrl = (fileId: string) => {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    };
    
    const getPreviewUrl = (fileId: string) => {
        return `https://drive.google.com/file/d/${fileId}/preview`;
    };
    /**/

    return (
        <div className="max-h-full min-h-[500px] border-4 border-yellow-500 dark:border-blue-600 bg-white dark:bg-slate-900 border-yellow-500 dark:border-blue-600 flex flex-col">
            <div className="p-4 bg-yellow-400 dark:bg-blue-600 flex justify-end items-center text-white">
                <a 
                    href={getDownloadUrl(resumeId)}
                    target="_blank"
                    className="bg-white uppercase text-yellow-600 dark:text-blue-700 p-1 px-3 text-xs font-black flex items-center gap-1 hover:bg-gray-100 transition-colors"
                >
                    <Download size={14} /> Download PDF
                </a>
            </div>
                            
            <div className="flex-1 relative bg-gray-100 dark:bg-slate-800 group overflow-hidden">
                <iframe 
                    src={`${getPreviewUrl(resumeId)}`} 
                    className="w-full h-full min-h-[450px]"
                    title="Resume Preview"
                />
            </div>
        </div>
    );
}