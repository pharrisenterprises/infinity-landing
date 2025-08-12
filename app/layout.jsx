import './globals.css';

export const metadata = {
  title: 'Infinity Sales',
  description: 'AI Agents that book calls & close micro-conversions 24/7.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
