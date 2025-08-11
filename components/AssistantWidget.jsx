// Repo B: infinity-landing /components/AssistantWidget.jsx
'use client';

import { useEffect } from 'react';

export default function AssistantWidget() {
  useEffect(() => {
    // Build DOM elements once
    let launcher = document.getElementById('aiw-launcher');
    let wrap = document.getElementById('aiw-wrap');
    let iframe = document.getElementById('aiw-iframe');

    if (!launcher) {
      launcher = document.createElement('button');
      launcher.id = 'aiw-launcher';
      launcher.type = 'button';
      launcher.setAttribute('aria-label', 'Open AI Assistant');
      document.body.appendChild(launcher);
    }
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'aiw-wrap';
      document.body.appendChild(wrap);
    }
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'aiw-iframe';
      // IMPORTANT: src points at your avatar project’s /embed route
      iframe.src = 'https://avatar-rtl-widget-2.vercel.app/embed';
      iframe.allow = 'microphone; camera; autoplay';
      iframe.setAttribute('title', 'AI Assistant');
      wrap.appendChild(iframe);
    }

    // Styles (inline to beat any theme CSS)
    Object.assign(launcher.style, {
      position: 'fixed',
      right: '20px',
      bottom: '20px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: '#2563eb',
      color: '#fff',
      border: 'none',
      boxShadow: '0 10px 30px rgba(0,0,0,.35)',
      cursor: 'pointer',
      zIndex: '2147483647',
    });
    launcher.innerHTML = `
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M2 3h20v14H6l-4 4V3z"></path>
      </svg>
    `;

    Object.assign(wrap.style, {
      position: 'fixed',
      right: '20px',
      bottom: '90px',
      width: '420px',
      height: '600px',
      maxWidth: '95vw',
      maxHeight: '85vh',
      background: '#000',
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: '0 16px 48px rgba(0,0,0,.45)',
      display: 'none',
      zIndex: '2147483646',
    });

    Object.assign(iframe.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      border: '0',
      display: 'block',
      background: '#000',
    });

    function openPanel() {
      wrap.style.display = 'block';
    }
    function closePanel() {
      wrap.style.display = 'none';
    }

    launcher.onclick = (e) => {
      e.preventDefault();
      openPanel();
    };
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closePanel();
    });

    // Auto-open once after page load (optional; comment out if you don’t want this)
    window.dispatchEvent(new Event('aiw-open'));

    return () => {
      // leave nodes in DOM for SPA nav; no-op
    };
  }, []);

  return null;
}
