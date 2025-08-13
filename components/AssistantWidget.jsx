'use client';

import { useEffect, useRef, useState } from 'react';

export default function AssistantWidget({
  widgetUrl = 'https://YOUR-WIDGET-DEPLOY.vercel.app/embed', // <-- set to your widget domain
  autostart = false
}) {
  const [open, setOpen] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    function onMessage(ev) {
      if (!ev?.data || typeof ev.data !== 'object') return;
      if (ev.data.type === 'aiw/close') setOpen(false);
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  useEffect(() => {
    if (open && autostart && iframeRef.current) {
      // kick the embed to start automatically
      iframeRef.current.contentWindow?.postMessage({ type: 'aiw/start' }, '*');
    }
  }, [open, autostart]);

  const url = autostart ? `${widgetUrl}?autostart=1` : widgetUrl;

  return (
    <>
      {/* chat bubble */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed', right: 16, bottom: 16,
          width: 56, height: 56, borderRadius: '50%',
          background: '#1e90ff', color: '#fff', border: 0,
          boxShadow: '0 10px 30px rgba(0,0,0,.25)', cursor: 'pointer', zIndex: 2147483647
        }}
        aria-label="Open chat"
      >
        💬
      </button>

      {/* panel */}
      {open && (
        <div
          id="aiw-wrap"
          style={{
            position: 'fixed', right: 16, bottom: 86,
            width: 380, height: 560, maxWidth: '92vw', maxHeight: '82vh',
            borderRadius: 14, overflow: 'hidden',
            boxShadow: '0 16px 50px rgba(0,0,0,.35)', zIndex: 2147483647, background: '#000'
          }}
        >
          <iframe
            ref={iframeRef}
            src={url}
            allow="microphone; camera; autoplay"
            title="AI Assistant"
            style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
          />
        </div>
      )}
    </>
  );
}
