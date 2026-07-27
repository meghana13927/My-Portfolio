import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] h-40 w-40 rounded-full blur-3xl transition-transform duration-75"
      style={{
        left: position.x - 80,
        top: position.y - 80,
        background:
          "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(59,130,246,0.15) 80%, transparent 80%)",
      }}
    />
  );
}

export default CursorGlow;