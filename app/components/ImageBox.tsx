import Tooltip from "@/app/components/ToolTip";

export default function ImageBox({ name, image } : { name:string, image:string }) {
    return (
        <Tooltip text={name}>
            <div className={`border-8 border-amber-500 p-2`}>
                <img 
                    src={image ? image : ""}
                    alt={`${name} logo`}
                    className="w-full h-full object-cover"
                />
            </div>
        </Tooltip>
    );
}