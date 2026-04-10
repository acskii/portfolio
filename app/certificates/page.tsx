import DataManager from "@/lib/data/DataManager";
import Certificate from "../components/certificates/Certificate";

export default async function CertificatesPage() {
    await DataManager.load();
    const certificates = await DataManager.getCertificates();

    return (
        <div className="py-20 min-h-screen bg-brand-bg">
            <Certificate certificates={certificates} />
        </div>
    );
}