
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import ExtraCurricular from "./components/ExtraCurricular";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="bg-gray-950 text-white">
     
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Education/>
      <Experience/>
      <Certificates/>
      <ExtraCurricular/>
      <BackToTop/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;