type Link = {
    name: string;
    href: string;
}

type Feature = {
    header: string;
    desc: string;
}

export interface ProjectType {
    preview: string;
    name: string;
    desc: string;
    skills: string[];

    links: Link[];
    features: Feature[];

    [key: string]: string | string[] | Record<string, string> | Record<string, string>[] | undefined;
};

export default class ProjectMapper {
    static map(json: any): ProjectType {
        return {
            preview: json.preview || "",
            name: json.name || "PROJECT",
            desc: json.desc || "",
            skills: Array.isArray(json.skills) ? json.skills : [],
            links: Array.isArray(json.links) 
                ? json.links.map((l: any) => ({ name: l.name, href: l.href })) 
                : [],
            features: Array.isArray(json.features)
                ? json.features.map((f: any) => ({ header: f.header, desc: f.desc }))
                : [],
            ...json 
        };
    }
};