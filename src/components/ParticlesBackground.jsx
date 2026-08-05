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
          number: { value: 35 },
          color: { value: ["#7dd3fc", "#fbbf24", "#cbd5e1"] },
          links: {
            enable: true,
            distance: 140,
            color: "#334155",
            opacity: 0.18,
          },
          move: { enable: true, speed: 0.8 },
          opacity: { value: 0.35 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 120, links: { opacity: 0.28 } } },
        },
      }}
    />
  );
}

export default ParticlesBackground;
