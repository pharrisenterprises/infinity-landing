// components/AssistantWidget.jsx
'use client';

import { useEffect } from 'react';

export default function AssistantWidget() {
  useEffect(() => {
    const byId = (id) => document.getElementById(id);

    const ensure = () => {
      let l = byId('aiw-launcher');
      let w = byId('aiw-wrap');
      let f = byId('aiw-iframe');

      // Create elements if missing
      if (!l) {
        l = document.createElement('div');
        l.id = 'aiw-launcher';
        l.setAttribute('role', 'button');
        l.setAttribute('aria-label', 'Open assistant');
        l.innerHTML =
          '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 3h20v14H6l-4 4V3z"/></svg>';
        document.body.appendChild(l);
      }
      if (!w) {
        w = document.createElement('div');
        w.id = 'aiw-wrap';
        document.body.appendChild(w);
      }
      if (!f) {
        f = document.createElement('iframe');
        f.id = 'aiw-iframe';
        // Cache-bust in case a prior failed load got stuck
        f.src = 'https://avatar-rtl-widget-2.vercel.app/embed?v=' + Date.now();
        f.allow = 'microphone; camera; autoplay';
        w.appendChild(f);
      }

      // Styles (assert with !important so theme CSS can’t override)
      l.style.cssText = [
        'position:fixed','right:16px','bottom:16px',
        'width:56px','height:56px','border-radius:50%',
        'background:#1e90ff','color:#fff',
        'display:flex','align-items:center','justify-content:center',
        'cursor:pointer','pointer-events:auto',
        'box-shadow:0 8px 24px rgba(0,0,0,.25)','z-index:2147483647'
      ].join('!important;') + '!important;';

      w.style.cssText = [
        'position:fixed','right:16px','bottom:86px',
        'width:380px','height:560px','max-width:90vw','max-height:80vh',
        'background:#000','border-radius:14px','overflow:hidden',
        'box-shadow:0 12px 40px rgba(0,0,0,.35)',
        'opacity:1','visibility:visible','display:none',
        'z-index:2147483647'
      ].join('!important;') + '!important;';
      w.setAttribute('aria-hidden','true');

      f.style.cssText = [
        'position:absolute','inset:0','width:100%','height:100%',
        'border:0','display:block','background:#000'
      ].join('!important;') + '!important;';

      // Robust click binding (remove prior to avoid duplicates)
      l.onclick = null;
      l.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        w.style.setProperty('display','block','important');
        w.setAttribute('aria-hidden','false');
        console.log('[AIW] launcher clicked -> opened');
      }, { once: false });

      // Public helpers
      window.aiwOpen  = () => { w.style.setProperty('display','block','important'); w.setAttribute('aria-hidden','false'); };
      window.aiwClose = () => { w.style.setProperty('display','none','important');  w.setAttribute('aria-hidden','true');  };
    };

    // Run now, and again if something strips our nodes
    ensure();
    const mo = new MutationObserver(() => {
      const ok = byId('aiw-launcher') && byId('aiw-wrap') && byId('aiw-iframe');
      if (!ok) ensure();
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });

    return () => mo.disconnect();
  }, []);

  return null;
}
