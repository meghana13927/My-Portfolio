import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-gray-950 text-white">

      <Navbar />

      <Hero />

      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl">About</h1>
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl">Skills</h1>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl">Projects</h1>
      </section>

      <section
        id="education"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl">Education</h1>
      </section>

      <section
        id="experience"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl">Experience</h1>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl">Contact</h1>
      </section>

    </div>
  );
}

export default App;