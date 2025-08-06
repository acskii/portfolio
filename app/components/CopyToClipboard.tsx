'use client';

/* Icon imports */
import { Clipboard, CheckSquare } from "@deemlol/next-icons";

/* React imports */
import { useState } from "react";
import Tooltip from "./ToolTip";

export default function CopyToClipboard({ copy }: { copy: string }) {
    const [clicked, setClicked] = useState<boolean>(false);

    const handleClick = () => {
        navigator.clipboard.writeText(copy);
        setClicked(true);
        setTimeout(() => setClicked(false), 2000);
    };

    return (
        <div className="rounded-box inline-flex items-center gap-1 p-1">
            <code id={`copy-${copy}`} className="px-2 text-sm font-medium select-all break-all">{copy}</code>
            <Tooltip text="Copy">
                <button 
                    type="button"
                    aria-label="Copy text to clipboard" 
                    aria-describedby="tooltip-Copy"
                    onClick={handleClick}
                    className="cursor-pointer border-amber-300 hover:border-2"
                >
                    <span className={`text-primary ${clicked ? "hidden" : ""} size-5`}>
                        <Clipboard size={18} />
                    </span>
                    <span className={`text-primary ${clicked ? "" : "hidden"} size-5`}>
                        <CheckSquare size={18} />
                    </span>
                </button>
            </Tooltip>
        </div>
    );
}