'use client';
import { useEffect } from 'react';

export default function AssistantWidget() {
  useEffect(() => {
    const byId = (id) => document.getElementById(id);

    let launcher = byId('aiw-launcher');
    if (!launcher) {
      launcher = document.createElement('button');
      launcher.id = 'aiw-launcher';
      launcher.type = 'button';
      launcher.setAttribute('aria-label', 'Open assistant');
      launcher.innerHTML = `
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M2 3h20v14H6l-4 4V3z"/>
        </svg>`;
      Object.assign(launcher.style, {
        position: 'fixed', right: '16px', bottom: '16px',
        width: '56px', height: '56px', borderRadius: '50%',
        background: '#1e90ff', color: '#fff', zIndex: '2147483647',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', boxShadow: '0 8px 24px rgba(0,0,0,.25)', border: '0',
      });
      document.body.appendChild(launcher);
    }

    let wrap = byId('aiw-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'aiw-wrap';
      Object.assign(wrap.style, {
        position: 'fixed', right: '16px', bottom: '86px',
        width: '380px', height: '560px', maxWidth: '90vw', maxHeight: '80vh',
        background: '#000', borderRadius: '14px', overflow: 'hidden',
        zIndex: '2147483647', display: 'none', boxShadow: '0 12px 40px rgba(0,0,0,.35)',
      });

      const iframe = document.createElement('iframe');
      iframe.id = 'aiw-iframe';
      iframe.src = 'https://avatar-rtl-widget-2.vercel.app/embed';
      iframe.allow = 'microphone; camera; autoplay';
      Object.assign(iframe.style, {
        position: 'absolute', inset: '0', width: '100%', height: '100%', border: '0',
        display: 'block', background: '#000',
      });

      wrap.appendChild(iframe);
      document.body.appendChild(wrap);
    }

    const openPanel  = () => { wrap.style.display = 'block'; };
    const closePanel = () => { wrap.style.display = 'none'; };

    const onLauncherClick = (e) => { e.preventDefault(); e.stopPropagation(); openPanel(); };
    launcher.addEventListener('click', onLauncherClick);

    const onEsc = (e) => { if (e.key === 'Escape') closePanel(); };
    document.addEventListener('keydown', onEsc);

    const onProgrammaticOpen = () => openPanel();
    window.addEventListener('aiw-open', onProgrammaticOpen);

    // TEMP: auto-open once after first mount
    setTimeout(() => window.dispatchEvent(new Event('aiw-open')), 500);

    return () => {
      launcher.removeEventListener('click', onLauncherClick);
      document.removeEventListener('keydown', onEsc);
      window.removeEventListener('aiw-open', onProgrammaticOpen);
    };
  }, []);

  return null;
}
