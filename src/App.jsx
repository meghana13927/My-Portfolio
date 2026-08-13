import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIBuild from "./components/WhatIBuild";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import BeyondCode from "./components/BeyondCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CursorDance from "./components/CursorDance";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <div className="app-backdrop" aria-hidden="true">
          <span className="app-backdrop-orb app-backdrop-orb-violet" />
          <span className="app-backdrop-orb app-backdrop-orb-cyan" />
          <span className="app-backdrop-orb app-backdrop-orb-pink" />
        </div>
        <CursorDance />
        <Navbar />
        <BackToTop />
        <main className="app-main">
          <Hero />
          <About />
          <WhatIBuild />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <BeyondCode />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
