
export type ProjectLink = Record<string, string>;

export type ProjectFeature = Record<string, string>;

export type ProjectData = {
    preview: string;
    name: string;
    desc: string;
    skills: string[];
    links: ProjectLink;
    features: ProjectFeature[];
    [key: string]: any; // Allow additional properties
};