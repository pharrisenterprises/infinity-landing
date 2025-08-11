export const metadata = {
  title: 'Infinity Sales — AI Agents that book calls',
  description: 'On-brand avatar for your site and phone system. Get answers, qualify, and book in seconds.',
  icons: { icon: '/favicon.ico' },
};

import './globals.css';
import AssistantWidget from '../components/AssistantWidget';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AssistantWidget />
      </body>
    </html>
  );
}
