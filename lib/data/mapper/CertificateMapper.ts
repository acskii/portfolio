
export interface CertificateType {
    name: string;
    downloadId: string;
    date: string;
};

export default class CertificateMapper {
    static map(json: any): CertificateType {
        return {
            "name": json.name.replace('.pdf', ''),
            "date": json.modifiedTime || new Date().toISOString(),
            "downloadId": json.id
        };
    }
};