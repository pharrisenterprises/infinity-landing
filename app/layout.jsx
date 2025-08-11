// app/layout.jsx
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Infinity Sales — AI & Automation',
  description: 'Effortless automation for your business success.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Your site content */}
        {children}

        {/* 1) Load the avatar widget script once, after the page becomes interactive */}
        <Script
          id="aiw-script"
          src="https://avatar-rtl-widget-2.vercel.app/widget.js?v=9"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* 2) Hardening: if the widget injected the launcher, this makes sure a click opens the panel */}
        <Script id="aiw-wireup" strategy="afterInteractive">
          {`
            (function () {
              function byId(id){ return document.getElementById(id); }
              function openPanel() {
                var w = byId('aiw-wrap'), f = byId('aiw-iframe');
                if (!w) {
                  w = document.createElement('div');
                  w.id = 'aiw-wrap';
                  w.style.position = 'fixed';
                  w.style.right = '16px';
                  w.style.bottom = '86px';
                  w.style.width = '380px';
                  w.style.height = '560px';
                  w.style.maxWidth = '90vw';
                  w.style.maxHeight = '80vh';
                  w.style.background = '#000';
                  w.style.borderRadius = '14px';
                  w.style.overflow = 'hidden';
                  w.style.zIndex = '2147483647';
                  w.style.display = 'block';
                  document.body.appendChild(w);
                } else {
                  w.style.display = 'block';
                }
                if (!f) {
                  f = document.createElement('iframe');
                  f.id = 'aiw-iframe';
                  f.src = 'https://avatar-rtl-widget-2.vercel.app/embed';
                  f.allow = 'microphone; camera; autoplay';
                  f.style.position = 'absolute';
                  f.style.inset = '0';
                  f.style.width = '100%';
                  f.style.height = '100%';
                  f.style.border = '0';
                  f.style.display = 'block';
                  f.style.background = '#000';
                  w.appendChild(f);
                }
              }
              function wire() {
                // If widget already added a launcher, bind click to open
                var l = byId('aiw-launcher');
                if (l) {
                  l.onclick = function(e){ e.preventDefault(); e.stopPropagation(); openPanel(); };
                }
                // Also listen for a custom event so we can open via console:  window.dispatchEvent(new Event('aiw-open'))
                window.addEventListener('aiw-open', openPanel);
              }
              if (document.readyState === 'complete' || document.readyState === 'interactive') {
                setTimeout(wire, 0);
              } else {
                document.addEventListener('DOMContentLoaded', wire, { once: true });
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
