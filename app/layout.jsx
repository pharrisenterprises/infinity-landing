// Repo B: infinity-landing /app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Infinity Sales',
  description: 'AI agents that book calls & close micro-conversions 24/7.',
  // remove icons to avoid favicon 404 until we add one
  // icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
