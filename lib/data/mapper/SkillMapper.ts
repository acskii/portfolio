
export interface SkillType {
    name: string;
    image: string;
};

export default class SkillMapper {
    static map(json: any): SkillType{
        return {
            name: json.name,
            image: json.image
        };
    }
};