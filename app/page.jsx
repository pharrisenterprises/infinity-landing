// Repo B: infinity-landing /app/page.jsx
import AssistantWidget from '@/components/AssistantWidget';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0b0d12', color: '#e5e7eb' }}>
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '72px 24px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '48px'
      }}>
        <div>
          <div style={{
            display:'inline-flex',
            alignItems:'center',
            gap:8,
            background:'#0f172a',
            padding:'6px 10px',
            borderRadius:999
          }}>
            <span style={{
              display:'inline-block',
              width:10, height:10, borderRadius:'50%', background:'#22c55e'
            }} />
            <span style={{fontSize:12, color:'#93c5fd'}}>INFINITY SALES</span>
          </div>

          <h1 style={{
            marginTop:24,
            lineHeight:1.05,
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            AI Agents that <span style={{color:'#3b82f6'}}>book</span> calls &amp; close
            <br/>micro-conversions 24/7.
          </h1>

          <p style={{marginTop:20, color:'#94a3b8', fontSize:18, maxWidth:640}}>
            We plug an on-brand avatar into your site and phone system so visitors get answers,
            qualify, and book within seconds.
          </p>

          <div style={{display:'flex', gap:16, marginTop:28}}>
            <a href="#" style={{
              background:'#1d4ed8', color:'#fff', padding:'14px 18px',
              borderRadius:10, fontWeight:700, textDecoration:'none'
            }}>Get a 15-min demo</a>
            <a href="#" style={{
              background:'#0f172a', color:'#cbd5e1', padding:'14px 18px',
              borderRadius:10, fontWeight:600, textDecoration:'none', border:'1px solid #1f2937'
            }}>See how it works</a>
          </div>
        </div>

        {/* Decorative gradient block */}
        <div style={{
          background: 'radial-gradient(120% 120% at 0% 0%, rgba(59,130,246,.25), transparent)',
          border:'1px solid #1f2937',
          borderRadius:16,
          minHeight:420
        }} />
      </section>

      {/* Mount the assistant launcher/panel */}
      <AssistantWidget />
    </main>
  );
}
