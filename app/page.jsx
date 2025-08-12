// app/page.jsx
'use client';

import AssistantWidget from '@/components/AssistantWidget';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0B0D12', color: '#fff' }}>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ opacity: .9, fontSize: 14, marginBottom: 20 }}>
          ● INFINITY SALES
        </div>

        <h1 style={{ fontSize: 56, lineHeight: 1.1, margin: 0 }}>
          AI Agents that <span style={{ color: '#2EA0FF' }}>book</span> calls & close<br />
          micro-conversions 24/7.
        </h1>

        <p style={{ marginTop: 24, maxWidth: 720, fontSize: 18, opacity: .85 }}>
          We plug an on-brand avatar into your site and phone system so visitors get answers,
          qualify, and book within seconds.
        </p>

        <div style={{ marginTop: 24, display: 'flex', gap: 16 }}>
          <a href="#demo" style={{
            background: '#2EA0FF', color: '#0B0D12', padding: '14px 18px',
            borderRadius: 10, textDecoration: 'none', fontWeight: 600
          }}>
            Get a 15-min demo
          </a>
          <a href="#how" style={{
            background: 'transparent', border: '1px solid #2b2f3a',
            color: '#cfd6e4', padding: '14px 18px', borderRadius: 10,
            textDecoration: 'none'
          }}>
            See how it works
          </a>
        </div>

        {/* Visual placeholder area on the right */}
        <div style={{
          marginTop: 40, width: '100%', height: 360, borderRadius: 18,
          background: 'radial-gradient(1200px 380px at 40% 40%, rgba(46,160,255,.15), rgba(11,13,18,1))',
          border: '1px solid rgba(255,255,255,.04)'
        }} />
      </section>

      {/* ——— THE WIDGET ——— */}
      <AssistantWidget />
    </main>
  );
}
