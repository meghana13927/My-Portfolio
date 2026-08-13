import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Beyond Code", href: "#beyond-code", id: "beyond-code" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className={`reference-navbar ${scrolled ? "reference-navbar-scrolled" : ""}`} aria-label="Primary">
      <div className="site-shell flex items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="reference-brand">
          Meghana H M
        </a>

        <div className="hidden items-center gap-2 text-sm lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
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
          className="navbar-toggle lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menu}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="navbar-mobile lg:hidden"
          >
            <div className="site-shell flex flex-col gap-2 px-5 pb-5 sm:px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenu(false);
                  }}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ delay: index * 0.03 }}
                  className={`navbar-mobile-link ${activeSection === item.id ? "navbar-mobile-link-active" : ""}`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
