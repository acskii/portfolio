export type Link = {
    name: string;
    href: string;
}

export type Feature = {
    header: string;
    desc: string;
}

export type ProjectData = {
    preview: string;
    name: string;
    desc: string;
    skills: string[];

    links: Link[];
    features: Feature[];

    [key: string]: string | string[] | Record<string, string> | Record<string, string>[] | undefined;
};