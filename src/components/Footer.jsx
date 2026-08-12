import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-stone-200 px-5 py-10 sm:px-6 lg:px-8">
      <div className="site-shell footer-reference">
        <div>
          <p className="section-eyebrow">Portfolio</p>
          <h2>Meghana H M</h2>
          <p className="footer-role">Software Developer</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/meghana13927" target="_blank" rel="noreferrer">
            <FaGithub />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/megh13a2/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            LinkedIn
          </a>
          <a href="mailto:meghameghana370@gmail.com">
            <FaEnvelope />
            Email
          </a>
        </div>

        <p className="footer-copy">© 2026 Meghana H M. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
