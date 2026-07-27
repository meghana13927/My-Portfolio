import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import ExtraCurricular from "./components/ExtraCurricular";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-gray-950 text-white">

      <ParticlesBackground />
      <CursorGlow />
      <BackToTop />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Resume />
      <Education />
      <Certificates />
      <ExtraCurricular />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;