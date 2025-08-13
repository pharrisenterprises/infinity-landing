import AssistantWidget from '@/components/AssistantWidget';

export default function Home() {
  return (
    <main>
      {/* your site content */}
      <AssistantWidget widgetUrl="https://YOUR-WIDGET-DEPLOY.vercel.app/embed" autostart={false} />
    </main>
  );
}
