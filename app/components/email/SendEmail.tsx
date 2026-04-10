"use client";

/* Props Type */
interface SendEmailProps {
    email: string;
}

export default function SendEmail({ email } : SendEmailProps) {
    const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const subject = encodeURIComponent(formData.get("subject") as string);
        const body = encodeURIComponent(formData.get("body") as string);
        
        // Redirects directly to Gmail compose
        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    };

    return (
        <form onSubmit={handleEmail} className="flex flex-col gap-4">
            <input name="subject" placeholder="Subject" className="p-3 border-2 dark:bg-slate-800 dark:text-white" required />
            <textarea name="body" placeholder="Your message..." rows={6} className="p-3 border-2 dark:bg-slate-800 dark:text-white" required />
            <button 
                type="submit"  
                rel="noopener noreferrer"
                className="cursor-pointer bg-yellow-500 dark:bg-blue-600 text-white py-3 font-bold uppercase"
            >
                Send
            </button>
        </form>
    );
};