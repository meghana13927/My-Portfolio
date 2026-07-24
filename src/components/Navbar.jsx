import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);
 const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}

        <a
          href="#home"
          className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
        
        </a>

        {/* Desktop */}

        <ul className="hidden lg:flex items-center gap-8">

          <li>
            <a href="#home" className="hover:text-purple-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-purple-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>
          </li>

          {/* Dropdown */}

         <li className="relative">

  <button
    onClick={() => setDropdownOpen(!dropdownOpen)}
    className="flex items-center gap-2 hover:text-purple-400 transition"
  >
    More
    <FaChevronDown
      className={`transition-transform duration-300 ${
        dropdownOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {dropdownOpen && (
    <div className="absolute top-12 left-0 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">

      <a
        href="#education"
        onClick={() => setDropdownOpen(false)}
        className="block px-5 py-3 hover:bg-purple-600 transition"
      >
        Education
      </a>

      <a
        href="#experience"
        onClick={() => setDropdownOpen(false)}
        className="block px-5 py-3 hover:bg-purple-600 transition"
      >
        Experience
      </a>

      <a
        href="#certificates"
        onClick={() => setDropdownOpen(false)}
        className="block px-5 py-3 hover:bg-purple-600 transition"
      >
        Certificates
      </a>

      <a
        href="#achievements"
        onClick={() => setDropdownOpen(false)}
        className="block px-5 py-3 hover:bg-purple-600 transition"
      >
        Achievements
      </a>

      <a
        href="#extracurricular"
        onClick={() => setDropdownOpen(false)}
        className="block px-5 py-3 hover:bg-purple-600 transition"
      >
        Activities
      </a>

    </div>
  )}

</li>

          <li>

            <a
              href="#resume"
              className="bg-purple-600 px-5 py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Resume
            </a>

          </li>

          <li>

            <a
              href="#contact"
              className="border border-purple-500 px-5 py-3 rounded-xl hover:bg-purple-600 transition"
            >
              Contact
            </a>

          </li>

        </ul>

        {/* Mobile */}

        <button
          onClick={() => setMenu(!menu)}
          className="lg:hidden text-3xl"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menu && (

        <div className="lg:hidden bg-[#050816] px-8 pb-8">

          {[
            "home",
            "about",
            "skills",
            "projects",
            "education",
            "experience",
            "certificates",
            "achievements",
            "extracurricular",
            "resume",
            "contact",
          ].map((item) => (

            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenu(false)}
              className="block py-4 capitalize border-b border-gray-800 hover:text-purple-400"
            >
              {item}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}

export default Navbar;