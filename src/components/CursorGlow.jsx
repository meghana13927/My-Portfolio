import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden h-32 w-32 rounded-full blur-3xl transition-transform duration-100 lg:block"
      style={{
        left: position.x - 64,
        top: position.y - 64,
        background: "radial-gradient(circle, rgba(251,191,36,0.18) 0%, rgba(56,189,248,0.12) 55%, transparent 75%)",
      }}
    />
  );
}

export default CursorGlow;
