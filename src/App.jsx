import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import ExtraCurricular from "./components/ExtraCurricular";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Education/>
      <Experience/>
      <Certificates/>
      <Achievements/>
      <ExtraCurricular/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;