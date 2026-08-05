function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 bg-slate-950/55 px-6 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div>
          <h2 className="text-xl font-extrabold uppercase tracking-[0.18em] text-slate-100">
            Meghana Portfolio
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            A full-stack portfolio built to feel more like a modern product experience than a traditional resume website.
          </p>
        </div>
        <p className="text-sm text-slate-500">© 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
