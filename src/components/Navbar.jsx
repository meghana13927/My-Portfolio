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
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="reference-navbar">
      <div className="site-shell flex items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="reference-brand">
          Meghana
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="reference-nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenu((open) => !open)}
          className="text-xl text-slate-700 xl:hidden"
          aria-label="Toggle menu"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menu && (
        <div className="border-t border-stone-200 bg-white px-5 py-4 xl:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenu(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-slate-50 hover:text-slate-900"
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
