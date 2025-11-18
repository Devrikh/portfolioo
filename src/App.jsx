import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./App.css";

import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import{ Work} from "./components/Work"
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";





function App() {



useEffect(() => {
  const emailElement = document.getElementById("email");
  const cursor = document.getElementById("cursor");

  if (!emailElement) return;

  const handleCopy = () => {
    const email = "devrikhjatav.official@gmail.com";
    navigator.clipboard.writeText(email);

    if (cursor) {
      cursor.innerText = "Copied!";
      cursor.classList.add("cursor-copy");
    }
  };

  emailElement.addEventListener("click", handleCopy);

  return () => {
    emailElement.removeEventListener("click", handleCopy);
  };
}, []);



  
useEffect(() => {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  const move = (e) => {
    cursor.style.left = (e.clientX-8) + "px";
    cursor.style.top = (e.clientY-4) + "px";
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
   




    const copyTargets = document.querySelectorAll(".cursor-copy-target");

    const copyEnter = () => {
      cursor.classList.add("cursor-copy");
      cursor.innerText = "Copy";
    };

    const copyLeave = () => {
      cursor.classList.remove("cursor-copy");
      cursor.innerText = "";
    };

    copyTargets.forEach((t) => {
      t.addEventListener("mouseenter", copyEnter);
      t.addEventListener("mouseleave", copyLeave);
    });



    const handleCopyClick = () => {
      navigator.clipboard.writeText("devrikhjatav.official@gmail.com");

      // show "Copied"
      cursor.innerText = "Copied";
      cursor.classList.add("cursor-copy");

    };


    copyTargets.forEach((t) => {
      t.addEventListener("click", handleCopyClick);
    });






  return () => {
    window.removeEventListener("mousemove", move);
    targets.forEach((t) => {
      t.removeEventListener("mouseenter", () => cursor.classList.add("grow"));
      t.removeEventListener("mouseleave", () =>
        cursor.classList.remove("grow")
      );
    });
  };
}, []);





const { scrollYProgress } = useScroll();

const siteY = useTransform(
  scrollYProgress,
  [0.10, 1], // start reveal later
  ["0%", "-30%"] // move slower and more linear
);

  return (
    <div className="font-[inter] ">
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
        </div>
      </motion.div>
      <div className="fixed bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
