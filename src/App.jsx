import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./App.css";

import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import{ Work} from "./components/Work"
import { Skills } from "./components/Skills";





function App() {



  
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
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
          <Skills />
          <div className="h-[1px] bg-[#F5F5F5]"></div>
          <About />
        </div>
      </motion.div>
      <div className="fixed bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
