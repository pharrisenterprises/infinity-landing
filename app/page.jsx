import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 ${className}`}>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      {/* HERO */}
      <div className="pt-28">
        <Section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1]">
              AI Agents that <span className="text-brand-accent">book calls</span> & close micro-conversions 24/7.
            </h1>
            <p className="mt-6 text-white/70 text-lg">
              We plug an on-brand avatar into your site and phone system so visitors get answers, qualify, and book within seconds.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#book" className="inline-flex items-center rounded-md bg-brand-accent px-6 py-3 text-black font-semibold">
                Get a 15-min demo
              </a>
              <a href="#how" className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 text-white">
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
              <span>Trusted by service businesses</span>
              <span className="h-4 w-px bg-white/10" />
              <span>Avg. response <strong className="text-white">1.2s</strong></span>
              <span className="h-4 w-px bg-white/10" />
              <span>Bookings up <strong className="text-white">38%</strong></span>
            </div>
          </div>

          {/* Video / Avatar preview area */}
          <div className="relative rounded-xl overflow-hidden bg-brand-light shadow-card aspect-video">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-white/10 grid place-items-center">
                  <span className="text-white/80">▶</span>
                </div>
                <p className="text-white/70">Intro video (replace with your Loom/YouTube)</p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* HOW IT WORKS */}
      <Section id="how" className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            ["Capture & Qualify", "Your avatar greets, answers, and qualifies in real-time."],
            ["Sync to Calendar", "Books on your calendar with your rules & routing."],
            ["Push to CRM", "Drops contacts + transcripts straight into your CRM."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border border-white/10 p-6 bg-brand-light">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-3 text-white/70">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROOF */}
      <Section id="proof" className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold">Recent wins</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            ["Home Services", "32% more inquiries turned into booked estimates in 14 days."],
            ["Legal", "First-call resolution up 27%, intake time down 41%."],
            ["Pest Control", "After-hours leads recovered: +22% monthly."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border border-white/10 p-6 bg-brand-light">
              <div className="text-brand-accent text-sm font-semibold">CASE STUDY</div>
              <h3 className="mt-2 font-semibold text-lg">{title}</h3>
              <p className="mt-3 text-white/70">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING / CTA */}
      <Section id="pricing" className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold">Simple pricing</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            ["Starter", "Perfect to try on one site.", "$299/mo"],
            ["Growth", "Multi-site + CRM sync.", "$699/mo"],
            ["Scale", "Custom routing & SLAs.", "Talk to us"]
          ].map(([name, blurb, price]) => (
            <div key={name} className="rounded-xl border border-white/10 p-6 bg-brand-light flex flex-col">
              <h3 className="font-semibold text-xl">{name}</h3>
              <p className="mt-2 text-white/70">{blurb}</p>
              <div className="mt-6 text-3xl font-bold">{price}</div>
              <a href="#book" className="mt-6 inline-flex items-center justify-center rounded-md bg-brand-accent px-4 py-2 text-black font-semibold">
                Get a demo
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
        <div className="mt-8 space-y-6">
          {[
            ["Will it talk over my site’s audio?", "We route audio to the avatar and display captions. Mic is opt-in by the visitor."],
            ["Can you start silent?", "Yes. The avatar loads when the user opens it; mic starts only when they click Start Mic."],
            ["Integrations?", "Calendar, CRM, and webhooks. We’ll map your flow on the onboarding call."]
          ].map(([q, a]) => (
            <div key={q} className="rounded-lg border border-white/10 p-5 bg-brand-light">
              <div className="font-semibold">{q}</div>
              <div className="mt-2 text-white/70">{a}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* BOOK CTA */}
      <Section id="book" className="mt-24">
        <div className="rounded-2xl bg-gradient-to-tr from-brand-light to-brand-dark border border-white/10 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Want this on your site next week?</h3>
          <p className="mt-3 text-white/70">We’ll deploy your avatar, connect your calendar/CRM, and ship in days—not months.</p>
          <a
            href="mailto:patrick@infinitysales.ai?subject=Demo%20Request"
            className="mt-6 inline-flex items-center rounded-md bg-brand-accent px-6 py-3 text-black font-semibold"
          >
            Book a 15-min call
          </a>
        </div>
      </Section>

      <Footer />
    </>
  );
}
