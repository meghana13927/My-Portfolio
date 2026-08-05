import { useMemo, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const moreItems = [
  { label: "Resume", href: "#resume" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "Activities", href: "#activities" },
];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mobileItems = useMemo(() => [...navItems, ...moreItems], []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-xl font-extrabold tracking-[0.18em] text-slate-100 uppercase">
          Meghana
        </a>

        <ul className="hidden items-center gap-7 text-sm font-semibold text-slate-300 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-sky-300">
                {item.label}
              </a>
            </li>
          ))}

          <li className="relative">
            <button
              onClick={() => setDropdownOpen((open) => !open)}
              className="flex items-center gap-2 transition hover:text-sky-300"
            >
              More
              <FaChevronDown className={dropdownOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-12 w-56 rounded-2xl border border-slate-700/80 bg-slate-900/95 p-2 shadow-2xl shadow-slate-950/50">
                {moreItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-sky-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <a href="#contact" className="button-primary px-5 py-3 text-sm">
              Hire Me
            </a>
          </li>
        </ul>

        <button onClick={() => setMenu((open) => !open)} className="text-2xl text-slate-200 lg:hidden">
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menu && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 pb-6 lg:hidden">
          <div className="mt-4 space-y-2">
            {mobileItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenu(false)}
                className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-sky-300"
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
