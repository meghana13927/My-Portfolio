import { useEffect, useState } from "react";
import { FaBolt } from "react-icons/fa";

function CursorDance() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    const updateState = () => {
      setEnabled(!reducedMotion.matches && finePointer.matches);
    };

    updateState();
    reducedMotion.addEventListener("change", updateState);
    finePointer.addEventListener("change", updateState);

    return () => {
      reducedMotion.removeEventListener("change", updateState);
      finePointer.removeEventListener("change", updateState);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const handleMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className="cursor-dance"
      aria-hidden="true"
      style={{
        transform: `translate3d(${position.x + 16}px, ${position.y - 20}px, 0)`,
      }}
    >
      <span className="cursor-dance-glow" />
      <span className="cursor-dance-icon">{"\uD83D\uDC83"}</span>
      <span className="cursor-dance-bolt">
        <FaBolt />
      </span>
    </div>
  );
}

export default CursorDance;
