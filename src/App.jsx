import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./App.css";

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = e.clientX - 8 + "px";
      cursor.style.top = e.clientY - 4 + "px";
    };
    window.addEventListener("mousemove", move);

    const targets = document.querySelectorAll(".cursor-grow");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", () => cursor.classList.add("grow"));
      t.addEventListener("mouseleave", () => cursor.classList.remove("grow"));
    });

    const down = () => cursor.classList.add("cursor-shrink");
    const up = () => cursor.classList.remove("cursor-shrink");
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    // Use event delegation on document so timing doesn't matter
    const handleMouseOver = (e) => {
      if (e.target.closest(".cursor-connect")) {
        cursor.innerText = "Connect";
        cursor.classList.add("cursor-copy");
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest(".cursor-connect")) {
        cursor.innerText = "";
        cursor.classList.remove("cursor-copy");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const siteY = useTransform(scrollYProgress, [0.1, 1], ["0%", "-30%"]);

  return (
    <div className="font-[inter]">
      {/* Cursor */}
      <div
        id="cursor"
        className="pointer-events-none fixed top-0 left-0 z-[9999]
                   h-[24px] w-[24px] rounded-full
                   backdrop-invert backdrop-saturate-200"
      />

      <motion.div
        style={{ y: siteY }}
        transition={{ type: "tween", ease: "easeOut", duration: 3 }}
        className="relative z-10"
      >
        <div className="bg-white">
          <Navbar />
          <Hero />
          <div className="h-[1px] bg-[#F5F5F5]" />
          <Experience />
          <div className="h-[1px] bg-[#F5F5F5]" />
          <Work />
          <div className="h-[1px] bg-[#F5F5F5]" />
          <Skills />
          <div className="h-[1px] bg-[#F5F5F5]" />
          <Certificates />
        </div>
      </motion.div>

      <div className="fixed bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
