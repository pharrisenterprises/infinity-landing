'use client';
import { useEffect } from 'react';

export default function AssistantWidget() {
  useEffect(() => {
    // prevent duplicate loads
    if (document.getElementById('aiw-script')) return;

    const s = document.createElement('script');
    s.id = 'aiw-script';
    // bump v when you redeploy the widget to bust cache
    s.src = 'https://avatar-rtl-widget-2.vercel.app/widget.js?v=10';
    s.defer = true;
    document.body.appendChild(s);

    return () => {
      // optional: don’t remove so it stays across route changes
    };
  }, []);

  // Nothing to render here – the script injects the launcher + panel
  return null;
}
