import { Github, Mail, Linkedin, Phone, Globe, Book, MessageCircle } from "@deemlol/next-icons";

type IconMapType = {
    [key: string]: React.ComponentType<{ size?: number }>;
};  

export const iconMap: IconMapType = {
    GitHub: Github,
    Email: Mail,
    Linkedin: Linkedin,
    Mobile: Phone,
    Website: Globe,
    Book: Book,
    Whatsapp: MessageCircle,
};