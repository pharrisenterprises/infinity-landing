// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Infinity Sales — AI Agents that book calls',
  description: 'On-brand voice + avatar agents that answer, qualify, and book within seconds.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
