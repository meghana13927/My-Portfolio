import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Dance", href: "#dance" },
  { label: "Activities", href: "#activities" },
];

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="site-shell flex items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-bold tracking-[0.18em] text-slate-900 uppercase">
          Meghana
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-rose-500">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenu((open) => !open)}
          className="text-xl text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menu && (
        <div className="border-t border-stone-200 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenu(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-rose-50 hover:text-rose-500"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
