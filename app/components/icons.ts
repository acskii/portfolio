import { Github, Mail, Linkedin, Phone, Globe } from "@deemlol/next-icons";

type IconMapType = {
    [key: string]: React.ComponentType<{ size?: number }>;
};

export const iconMap: IconMapType = {
    GitHub: Github,
    Email: Mail,
    Linkedin: Linkedin,
    Mobile: Phone,
    Website: Globe
};