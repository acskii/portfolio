import { ReactNode } from "react";


export default function Tooltip({ children, text }: { children: ReactNode, text: string }) {
    return (
        <div role="tooltip" id={`tootip-${text}`} className="relative group">
            {children}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-amber-500 text-white text-sm font-semibold px-2 z-10">
                {text}
            </div>
        </div>
    );
}