export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Infinity Sales. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-white/90">Privacy</a>
          <a href="/terms" className="hover:text-white/90">Terms</a>
        </div>
      </div>
    </footer>
  );
}
