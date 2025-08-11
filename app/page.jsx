export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-start gap-8 flex-wrap">
          <div className="flex-1 min-w-[280px]">
            <div className="inline-flex items-center gap-2 bg-[#111821] rounded px-2 py-1 mb-4">
              <span className="inline-block w-3 h-3 bg-[#1e90ff] rounded-full" />
              <span className="text-sm text-[#8aa3b5]">INFINITY SALES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              AI Agents that <span className="text-[#1e90ff]">book calls</span> &amp; close
              <br /> micro-conversions 24/7.
            </h1>
            <p className="text-lg text-[#a9b6c4] mt-5 max-w-xl">
              We plug an on-brand avatar into your site and phone system so visitors get answers,
              qualify, and book within seconds.
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href="#demo"
                className="inline-flex items-center justify-center bg-[#1e90ff] hover:brightness-110 text-white font-semibold px-5 py-3 rounded-lg"
              >
                Get a 15-min demo
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center bg-[#0f141b] border border-[#223041] hover:bg-[#111821] text-white font-semibold px-5 py-3 rounded-lg"
              >
                See how it works
              </a>
            </div>

            <div className="flex gap-8 mt-6 text-sm text-[#8aa3b5]">
              <div>Trusted by service businesses</div>
              <div>Avg. response <strong className="text-white">1.2s</strong></div>
              <div>Bookings up <strong className="text-white">38%</strong></div>
            </div>
          </div>

          <div className="flex-1 min-w-[280px]">
            <div className="bg-[#0f141b] rounded-xl border border-[#1b2633] h-[360px] w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,144,255,.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,.06),transparent_30%)]" />
              {/* Placeholder panel area */}
              <div className="absolute bottom-4 right-4 h-14 w-14 bg-[#1e90ff] rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
