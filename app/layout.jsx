import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Infinity Sales — AI & Automation",
  description: "AI agents that book calls and capture pipeline 24/7."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white antialiased">
        {/* Load your avatar widget button */}
        <Script
          src="https://avatar-rtl-widget-2.vercel.app/widget.js?v=9"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
