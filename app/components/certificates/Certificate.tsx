/* Font imports */
import { poppins } from "@/app/components/fonts";

/* Certificate Data Object */
import { CertificateType } from "@/lib/data/mapper/CertificateMapper";

/* Nextjs */
import Link from "next/link";
import { ArrowRight, Download, Eye } from "@deemlol/next-icons";

/* Props */
interface CertificateProps {
    certificates: CertificateType[];
    limit?: number;

}

export default function Certificate({ certificates, limit }: CertificateProps) {
    /* These URLs can only work if the content on Google Drive is set as "Anyone with the link" publicity */
    const getDownloadUrl = (fileId: string) => {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    };

    const getViewUrl = (fileId: string) => {
        return `https://drive.google.com/file/d/${fileId}/view`;
    };

    const getThumbnailUrl = (fileId: string) => {
        return `https://drive.google.com/thumbnail?id=${fileId}`;
    };
    /**/

    const list = limit ? certificates.slice(0, limit) : certificates;

    return (
        <div className="px-0 md:px-14">
            <div className="flex flex-row gap-2 items-center">
                <h1 
                    id="certificates" 
                    className={`${poppins.className} border-4 border-yellow-500 dark:border-blue-600 font-bold text-2xl w-50 text-center mb-5 dark:text-white`}
                >
                    Certificates
                </h1>
                {limit && certificates.length > limit && (
                    <Link href="/certificates" className="text-amber-600 dark:text-purple-400 font-bold hover:underline flex items-center gap-4">
                        See More <ArrowRight size={18} />
                    </Link>
                )}
                {certificates.length === 0 && (
                    <h2 className={`${poppins.className} border-4 border-yellow-500 dark:border-blue-600 font-bold text-xl text-center mb-5 px-2 dark:text-white`}>
                        No certificates listed
                    </h2> 
                )}
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {list.map((certificate, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-gray-900 border-4 border-yellow-500 dark:border-blue-600 overflow-hidden hover:shadow-lg hover:shadow-yellow-500/20 dark:hover:shadow-blue-500/30 duration-300 hover:scale-105"
                        >
                            <div className="h-48 text-amber-500 dark:text-blue-400 flex items-center justify-center border-b-2 border-yellow-500 dark:border-blue-600 bg-white dark:bg-slate-800">
                                <img 
                                    src={getThumbnailUrl(certificate.downloadId)} 
                                    alt={`${certificate.name} preview`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6 bg-yellow-400 dark:bg-slate-900 text-white">
                                <h3 className={`${poppins.className} text-lg font-bold mb-4 leading-tight dark:text-blue-400 h-18 line-clamp-3`}>
                                    {certificate.name}
                                </h3>

                                <div className="flex gap-2 flex-col sm:flex-row">
                                    <a
                                        href={getViewUrl(certificate.downloadId)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-amber-500 dark:bg-blue-600 font-semibold border-2 border-amber-700 dark:border-blue-800 hover:bg-yellow-600 dark:hover:bg-blue-700 px-3 py-2 transition-colors text-md flex items-center justify-center gap-1"
                                    >
                                        <Eye size={18} />
                                        View
                                    </a>
                                    <a
                                        href={getDownloadUrl(certificate.downloadId)}
                                        download
                                        className="flex-1 border-2 border-green-700 dark:border-purple-800 bg-green-600 dark:bg-purple-700 hover:bg-green-700 dark:hover:bg-purple-800 text-white px-3 py-2 text-md font-semibold flex items-center justify-center gap-1"
                                    >
                                        <Download size={18} />
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}