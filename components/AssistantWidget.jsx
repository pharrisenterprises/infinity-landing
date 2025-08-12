'use client';

export default function AssistantWidget() {
  return (
    <div
      id="aiw-wrap"
      style={{
        width: '100%',
        aspectRatio: '4 / 3',
        borderRadius: 12,
        overflow: 'hidden',
        background: '#000',
        position: 'relative',
      }}
    >
      <iframe
        id="aiw-iframe"
        src="https://avatar-rtl-widget-2.vercel.app/embed"
        allow="microphone; camera; autoplay"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          border: 0,
          display: 'block',
          background: '#000',
        }}
        title="Infinity Sales Assistant"
      />
    </div>
  );
}
