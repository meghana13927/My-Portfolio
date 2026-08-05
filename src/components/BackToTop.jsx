import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-950/85 text-sky-300 shadow-xl transition hover:-translate-y-1 hover:border-sky-400/40 hover:text-sky-200"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default BackToTop;
