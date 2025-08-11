export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-dark/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-brand-accent" />
          <span className="font-semibold">INFINITY SALES</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#proof" className="hover:text-white">Proof</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#book" className="inline-flex items-center rounded-md bg-brand-accent px-4 py-2 font-medium text-black">
            Get a Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
