
export interface AboutItemType {
    icon: string;
    content: string;
};

export default class AboutMapper {
    static map(json: any): AboutItemType {
        return {
            "icon": json.icon, 
            "content": json.content, 
        };
    }
};