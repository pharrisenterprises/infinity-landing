'use client';
import { useEffect } from 'react';

/**
 * Self-healing assistant widget loader.
 * 1) Loads https://avatar-rtl-widget-2.vercel.app/widget.js
 * 2) If launcher/wrap/iframe aren’t present quickly, creates them.
 * 3) Robustly wires click to open panel and ensures z-index/pointer-events.
 */
export default function AssistantWidget() {
  useEffect(() => {
    const WIDGET_SRC = 'https://avatar-rtl-widget-2.vercel.app/widget.js?v=11';

    // --- utils ---
    const byId = (id) => document.getElementById(id);
    const ensureStyles = () => {
      const l = byId('aiw-launcher');
      const w = byId('aiw-wrap');
      const f = byId('aiw-iframe');

      if (l) {
        l.style.cssText = [
          'position:fixed','right:16px','bottom:16px',
          'width:56px','height:56px','border-radius:50%',
          'background:#1e90ff','color:#fff',
          'display:flex','align-items:center','justify-content:center',
          'cursor:pointer','pointer-events:auto',
          'box-shadow:0 8px 24px rgba(0,0,0,.25)',
          'z-index:2147483647'
        ].join(';');
      }
      if (w) {
        w.style.cssText = [
          'position:fixed','right:16px','bottom:86px',
          'width:380px','height:560px',
          'max-width:90vw','max-height:80vh',
          'background:#000','border-radius:14px',
          'overflow:hidden',
          'box-shadow:0 12px 40px rgba(0,0,0,.35)',
          'z-index:2147483647',
          'display:none','opacity:1','visibility:visible'
        ].join(';');
        w.setAttribute('aria-hidden','true');
      }
      if (f) {
        f.style.cssText = [
          'position:absolute','inset:0',
          'width:100%','height:100%',
          'border:0','display:block','background:#000'
        ].join(';');
        f.allow = 'microphone; camera; autoplay';
      }
    };
    const makeLauncherIfMissing = () => {
      let l = byId('aiw-launcher');
      if (!l) {
        l = document.createElement('div');
        l.id = 'aiw-launcher';
        l.setAttribute('role','button');
        l.innerHTML = `
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M2 3h20v14H6l-4 4V3z"/>
          </svg>
        `;
        document.body.appendChild(l);
      }
      return l;
    };
    const ensureWrapAndIframe = () => {
      let w = byId('aiw-wrap');
      if (!w) {
        w = document.createElement('div');
        w.id = 'aiw-wrap';
        document.body.appendChild(w);
      }
      let f = byId('aiw-iframe');
      if (!f) {
        f = document.createElement('iframe');
        f.id = 'aiw-iframe';
        f.allow = 'microphone; camera; autoplay';
        f.src = 'https://avatar-rtl-widget-2.vercel.app/embed';
        w.appendChild(f);
      }
      ensureStyles();
      return { w, f };
    };
    const openPanel = () => {
      const { w } = ensureWrapAndIframe();
      w.style.display = 'block';
      w.setAttribute('aria-hidden','false');
      // (optional) ping iframe it just opened
      try {
        byId('aiw-iframe')?.contentWindow?.postMessage({type:'aiw-opened'}, '*');
      } catch {}
    };
    const closePanel = () => {
      const w = byId('aiw-wrap');
      if (w) {
        w.style.display = 'none';
        w.setAttribute('aria-hidden','true');
      }
    };
    const wireClick = () => {
      const l = makeLauncherIfMissing();
      l.onclick = (e) => {
        e.preventDefault(); e.stopPropagation();
        openPanel();
      };
      // ESC closes
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePanel();
      });
    };

    // expose quick helpers for debugging
    window.aiwOpen = openPanel;
    window.aiwClose = closePanel;

    // --- load vendor script (idempotent) ---
    if (!byId('aiw-script')) {
      const s = document.createElement('script');
      s.id = 'aiw-script';
      s.src = WIDGET_SRC;
      s.defer = true;
      document.body.appendChild(s);
    }

    // Always create/fix our own DOM and handlers (works even if widget.js is slow)
    makeLauncherIfMissing();
    ensureWrapAndIframe();
    ensureStyles();
    wireClick();

    // Safety: if widget.js didn’t produce DOM, try again quickly
    const t1 = setTimeout(() => {
      makeLauncherIfMissing();
      ensureWrapAndIframe();
      ensureStyles();
      wireClick();
    }, 600);

    // Final nudge: if iframe never got a src or user can’t click the bubble, force-open once
    const t2 = setTimeout(() => {
      const f = byId('aiw-iframe');
      if (f && !f.src) f.src = 'https://avatar-rtl-widget-2.vercel.app/embed';
    }, 1200);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return null;
}
