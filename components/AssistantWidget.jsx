'use client';

import { useEffect } from 'react';

const WIDGET_ORIGIN = 'https://avatar-rtl-widget-2.vercel.app';
const EMBED_URL = `${WIDGET_ORIGIN}/embed`;

export default function AssistantWidget() {
  useEffect(() => {
    let launcher = document.getElementById('aiw-launcher');
    if (!launcher) {
      launcher = document.createElement('button');
      launcher.id = 'aiw-launcher';
      launcher.setAttribute('aria-label', 'Open AI Assistant');
      launcher.style.cssText = [
        'position:fixed','right:24px','bottom:24px',
        'width:64px','height:64px','border-radius:50%',
        'background:#1976d2','color:#fff','border:0',
        'display:flex','align-items:center','justify-content:center',
        'box-shadow:0 10px 30px rgba(0,0,0,.25)','cursor:pointer',
        'z-index:2147483647'
      ].join(';');
      launcher.innerHTML = `<svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M2 3h20v14H7l-5 5V3z"/></svg>`;
      document.body.appendChild(launcher);
    }

    let wrap = document.getElementById('aiw-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'aiw-wrap';
      wrap.style.cssText = [
        'position:fixed','right:24px','bottom:100px',
        'width:420px','height:600px','max-width:95vw','max-height:85vh',
        'background:#000','border-radius:16px','overflow:hidden',
        'display:none','box-shadow:0 14px 48px rgba(0,0,0,.35)',
        'z-index:2147483647'
      ].join(';');
      document.body.appendChild(wrap);
    }

    let iframe = document.getElementById('aiw-iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'aiw-iframe';
      iframe.src = EMBED_URL;
      iframe.allow = 'microphone; camera; autoplay';
      iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;background:#000;';
      wrap.appendChild(iframe);
    }

    const open = () => { wrap.style.display = 'block'; };
    const close = () => { wrap.style.display = 'none'; };

    launcher.onclick = (e) => { e.preventDefault(); e.stopPropagation(); open(); };
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }, []);

  return null;
}
