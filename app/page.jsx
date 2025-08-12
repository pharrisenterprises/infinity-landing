import AssistantWidget from '../components/AssistantWidget';

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16 text-white bg-[#0b0d12]">
      <AssistantWidget />
      <section className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-sm text-slate-300/80">
            <span className="inline-block w-3 h-3 rounded-full bg-sky-500" />
            INFINITY SALES
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            AI Agents that <span className="text-sky-400">book</span> calls &amp; close micro-conversions 24/7.
          </h1>
          <p className="text-slate-300/90 text-lg">
            We plug an on-brand avatar into your site and phone system so visitors get answers, qualify, and book within seconds.
          </p>
          <div className="flex gap-4">
            <a href="#demo" className="rounded-lg bg-sky-500 hover:bg-sky-400 text-black font-semibold px-5 py-3">
              Get a 15-min demo
            </a>
            <a href="#how" className="rounded-lg border border-slate-600 hover:border-slate-500 px-5 py-3">
              See how it works
            </a>
          </div>
        </div>

        {/* Right column – just a styled card area; widget floats on the page */}
        <div className="rounded-xl bg-gradient-to-b from-slate-800/20 to-slate-800/5 p-4 min-h-[360px]" />
      </section>
    </main>
  );
}
