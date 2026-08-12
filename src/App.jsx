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
import DanceSection from "./components/DanceSection";
import ExtraCurricular from "./components/ExtraCurricular";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

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
    <div className="app-shell">
      <Navbar />
      <BackToTop />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <DanceSection />
        <ExtraCurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
