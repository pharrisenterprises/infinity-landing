// app/page.jsx
import AssistantWidget from '../components/AssistantWidget';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0f14', color: '#e6eef6' }}>
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 24px 140px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 14, letterSpacing: 1, marginBottom: 16, color: '#84a3c5' }}>● INFINITY SALES</div>
            <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: 0 }}>
              AI Agents that <span style={{ color: '#3391ff' }}>book calls</span> &amp; close micro-conversions 24/7.
            </h1>
            <p style={{ marginTop: 18, color: '#98b0c7', fontSize: 18, maxWidth: 680 }}>
              We plug an on-brand avatar into your site and phone system so visitors get answers, qualify, and book within seconds.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <a href="#demo" style={cta('#1f87ff')}>Get a 15-min demo</a>
              <a href="#how" style={cta('#1b2a38')}>See how it works</a>
            </div>
          </div>
          <div>
            <div style={{
              width: '100%', height: 540, borderRadius: 16, background: 'radial-gradient(1200px 400px at 40% 10%, #153147 0%, #0a0f14 60%)',
              border: '1px solid #15212d'
            }} />
          </div>
        </div>
      </section>

      {/* Mounts the chat launcher + iframe */}
      <AssistantWidget />
    </main>
  );
}

function cta(bg) {
  return {
    display:'inline-block', padding: '14px 18px', borderRadius: 10,
    background: bg, color: '#e6eef6', textDecoration: 'none', fontWeight: 600,
    border: bg === '#1b2a38' ? '1px solid #243547' : 'none'
  };
}
