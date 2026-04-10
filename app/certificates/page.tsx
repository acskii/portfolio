import DataManager from "@/lib/data/DataManager";
import Certificate from "../components/certificates/Certificate";

export default async function CertificatesPage() {
    await DataManager.load();
    const certificates = await DataManager.getCertificates();

    return (
        <div className="min-h-screen">
            <Certificate certificates={certificates} />
        </div>
    );
}