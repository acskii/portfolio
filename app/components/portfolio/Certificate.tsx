'use client';

/* React imports */
import { useState, useEffect } from "react";

/* Font imports */
import { poppins } from "@/app/components/fonts";

/* Icon imports */
import { iconMap } from "@/app/components/icons";

/* Certificates JSON */
import certificate from "@/app/certificate.json";

/* Types imports */
import type { CertificateData } from "@/app/components/types";

import Spinner from "@/app/components/LoadingSpinner";

export default function Certificate() {
    const [certificates, setCertificates] = useState<CertificateData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const loadCertificates = () => {
            setCertificates(certificate);
            setLoading(false);
        };
        
        loadCertificates();
    }, []);

    const getDownloadUrl = (fileId: string) => {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    };

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        } catch {
            return dateString; // Return original string if parsing fails
        }
    };

    return (
        <div className="px-0 md:px-14">
            <div className="flex flex-row gap-2 items-center">
                <h1 id="certificates" className={`${poppins.className} border border-4 border-yellow-500 font-bold text-2xl w-50 text-center mb-5`}>
                    Certificates
                </h1>
                {loading ? <Spinner /> : <></>}
                {error != "" ? <span className="text-xl italic">{error}</span> : <></>}
                {certificates.length == 0 && !loading ? 
                    <h2 className={`${poppins.className} border border-4 border-yellow-500 font-bold text-xl text-center mb-5 px-2`}>
                        No certificates listed
                    </h2> 
                : <></>}
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {certificates.map((certificate, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 border-4 border-yellow-500 overflow-hidden hover:shadow-lg hover:shadow-yellow-500/20 duration-300 hover:scale-105"
                        >
                            <div className="h-48 text-amber-500 flex items-center justify-center border-b-2 border-yellow-500">
                                <img 
                                    src={`https://drive.google.com/thumbnail?id=${certificate.downloadId}`} 
                                    alt={`${certificate.name} preview`}
                                    className="w-full h-full object-cover"
                                />
                                    {/* // <div className="text-amber-400 text-center p-4">
                                    //     <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    //     </svg>
                                    //     <p className="text-sm">Certificate Preview</p>
                                    // </div> */}
                            </div>

                            <div className="p-6 bg-yellow-400 text-white">
                                <h3 className={`${poppins.className} text-lg font-bold mb-2 leading-tight`}>
                                    {certificate.name}
                                </h3>

                                <p className="mb-4 text-sm font-medium">
                                    Achieved: {formatDate(certificate.date)}
                                </p>

                                <div className="flex gap-2 flex-col sm:flex-row">
                                    <a
                                        href={`https://drive.google.com/file/d/${certificate.downloadId}/view`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-amber-500 font-semibold border-2 border-amber-700 hover:bg-yellow-600 px-3 py-2 transition-colors text-md flex items-center justify-center gap-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        View
                                    </a>
                                    <a
                                        href={getDownloadUrl(certificate.downloadId)}
                                        download
                                        className="flex-1 border-2 border-green-700 bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-md font-semibold flex items-center justify-center gap-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
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