'use client';

import { redirect } from "next/navigation";

export default function Home() {
  redirect('/portfolio');

  return (
    <div className="min-h-screen bg-violet-50">
      <main className="min-w-screen p-8 md:p-20">
        <section className="w-full text-center my-10">
          <h1 className="font-bold text-6xl text-amber-400">Under Construction</h1>
          <h3 className="text-left text-3xl font-bold underline decoration-amber-400 text-violet-400">Working features:</h3>
        </section>
        <section className="w-full text-center">
          <h4 className="text-lg text-violet-400 italic">None yet..</h4>
        </section>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
        <h4>Built with ❤️ by Andrew Sameh (@acskii)</h4>
      </footer>
    </div>
  );
}
