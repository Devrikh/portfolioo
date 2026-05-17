import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./App.css";

import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Certificates } from "./components/Certificates";

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
    const growEnter = (e) =>
      e.currentTarget.addEventListener && cursor.classList.add("grow");
    const growLeave = () => cursor.classList.remove("grow");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", () => cursor.classList.add("grow"));
      t.addEventListener("mouseleave", () => cursor.classList.remove("grow"));
    });

    const down = () => cursor.classList.add("cursor-shrink");
    const up = () => cursor.classList.remove("cursor-shrink");
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const copyTargets = document.querySelectorAll(".cursor-copy-target");

    const copyEnter = () => {
      cursor.classList.add("cursor-copy");
      cursor.innerText = "Copy";
    };
    const copyLeave = () => {
      cursor.classList.remove("cursor-copy");
      cursor.innerText = "";
    };
    const handleCopyClick = () => {
      navigator.clipboard.writeText("devrikhjatav.official@gmail.com");
      cursor.innerText = "Copied !";
      cursor.classList.add("cursor-copy");
    };

    copyTargets.forEach((t) => {
      t.addEventListener("mouseenter", copyEnter);
      t.addEventListener("mouseleave", copyLeave);
      t.addEventListener("click", handleCopyClick);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", () => cursor.classList.add("grow"));
        t.removeEventListener("mouseleave", () =>
          cursor.classList.remove("grow"),
        );
      });
      copyTargets.forEach((t) => {
        t.removeEventListener("mouseenter", copyEnter);
        t.removeEventListener("mouseleave", copyLeave);
        t.removeEventListener("click", handleCopyClick);
      });
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
      ></div>

      <motion.div
        style={{ y: siteY }}
        transition={{ type: "tween", ease: "easeOut", duration: 3 }}
        className="relative z-10"
      >
        <div className="bg-white">
          <Navbar />
          <Hero />
          <div className="h-[1px] bg-[#F5F5F5]"></div>
          <Work />
          <div className="h-[1px] bg-[#F5F5F5]"></div>
          <About />
          <div className="h-[1px] bg-[#F5F5F5]"></div>
          <Skills />
          <div className="h-[1px] bg-[#F5F5F5]"></div>
          <Experience />
          <div className="h-[1px] bg-[#F5F5F5]"></div>
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
