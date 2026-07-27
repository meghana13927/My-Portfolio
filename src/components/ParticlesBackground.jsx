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
        fullScreen: {
          enable: true,
          zIndex: -10,
        },

        background: {
          color: "#030712",
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 55,
          },

          color: {
            value: ["#a855f7", "#06b6d4", "#ec4899"],
          },

          links: {
            enable: true,
            distance: 150,
            color: "#555",
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },

          modes: {
            repulse: {
              distance: 120,
            },
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;