/* Data Manager */
import DataManager from "@/lib/data/DataManager";

/* Font import */
import { poppins } from "../fonts";

/* Type import */
import { ContactType } from "@/lib/data/mapper/ContactMapper";

/* Icon import */
import { XCircle } from "@deemlol/next-icons";

/* Component import */
import SendEmail from "../components/email/SendEmail";

export const revalidate = 3600;

export default async function EmailRedirect() {
    // Get email in contact info from drive
    await DataManager.load();
    const contacts: ContactType[] = await DataManager.getContact();
    const email = contacts.find((f) => f.title == "Email")?.href;

    if (!email) return (
        <div className="max-w-2xl flex flex-col gap-2 items-center mx-auto p-10 bg-white dark:bg-slate-900 border-4 border-yellow-500 dark:border-blue-600">
            <XCircle size={40} />
            <h2 className="text-3xl font-bold mb-6 dark:text-white">No email provided</h2>
        </div>
    );

    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-2xl">
                <h1 
                    className={`${poppins.className} border-4 border-yellow-500 dark:border-blue-600 font-bold text-2xl text-center mb-5 dark:text-blue-600`}
                >
                    Send Email
                </h1>
            </div>
            <div className="max-w-2xl mx-auto p-10 bg-white dark:bg-slate-900 border-4 border-yellow-500 dark:border-blue-600">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Compose Message</h2>
                <SendEmail email={email}/>
            </div>
        </div>
    );
}