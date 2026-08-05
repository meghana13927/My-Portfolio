import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -10 },
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          number: { value: 30 },
          color: { value: ["#f59e0b", "#38bdf8", "#fb7185"] },
          links: {
            enable: true,
            distance: 150,
            color: "#fcd34d",
            opacity: 0.18,
          },
          move: { enable: true, speed: 0.75 },
          opacity: { value: 0.35 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 120, links: { opacity: 0.3 } } },
        },
      }}
    />
  );
}

export default ParticlesBackground;
