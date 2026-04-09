
export interface ContactType {
    title: string;
    href: string;
};

export default class ContactMapper {
    static map(json: any): ContactType {
        return {
            "title": json.title, 
            "href": json.href, 
        };
    }
};