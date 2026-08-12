import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="reference-navbar" aria-label="Primary">
      <div className="site-shell flex items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="reference-brand">
          Meghana
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`reference-nav-link ${activeSection === item.id ? "reference-nav-link-active" : ""}`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenu((open) => !open)}
          className="text-xl text-slate-700 xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={menu}
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
                className={`rounded-xl px-3 py-2 transition hover:bg-slate-50 hover:text-slate-900 ${activeSection === item.id ? "bg-slate-100 text-slate-900" : ""}`}
                aria-current={activeSection === item.id ? "page" : undefined}
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
