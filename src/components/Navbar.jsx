import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };


  return (
    <motion.div
      className="absolute w-full top-0 left-0"
      initial={{ y: -50, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
    >
      <div className="h-[93px] p-[30px] flex items-center border-b border-[#F5F5F5]">
        <div className="font-[inter] flex w-full justify-between">
          <div className="cursor-grow font-bold text-[30px] leading-[1.1em] tracking-[-0.03em]">
            DEJA
          </div>

          {/* Right section */}
          <div className="flex font-medium items-center gap-[30px] text-[18px]">
            {/* Show these only when open */}

            <AnimatePresence>
              {open && (
                <motion.div
                  key="navlinks"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex items-center gap-[30px] "
                >
                  <p
                    onClick={() => scrollToSection("work")}
                    className="hover:text-black/40 transition-colors duration-300"
                  >
                    Works
                  </p>
                  <p
                    onClick={() => scrollToSection("about")}
                    className="hover:text-black/40 transition-colors duration-300"
                  >
                    About
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1vflxn9SC5snoF9IoK9bZAslgkzhylYKj/view?usp=sharing"
                    className="hover:text-black/40 transition-colors duration-300"
                  >
                    Resume
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle icon */}
            <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
              <svg
                className="cursor-grow"
                width="18"
                height="18"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                pointerEvents="border-box"
              >
                {/* TOP LEFT */}
                <rect
                  width="30"
                  height="30"
                  fill="black"
                  x={!open ? "-5" : "0"}
                  y={!open ? "-5" : "0"}
                  className="block"
                />

                {/* TOP RIGHT */}
                <rect
                  width="30"
                  height="30"
                  fill="black"
                  x={!open ? "75" : "70"}
                  y={!open ? "-5" : "0"}
                  className="block"
                />

                {/* CENTER BLOCK (only visible in closed state) */}
                {open && (
                  <rect
                    width="30"
                    height="30"
                    fill="black"
                    x="35"
                    y="35"
                    className="block"
                  />
                )}

                {/* BOTTOM LEFT */}
                <rect
                  width="30"
                  height="30"
                  fill="black"
                  x={!open ? "-5" : "0"}
                  y={!open ? "75" : "70"}
                  className="block"
                />

                {/* BOTTOM RIGHT */}
                <rect
                  width="30"
                  height="30"
                  fill="black"
                  x={!open ? "75" : "70"}
                  y={!open ? "75" : "70"}
                  className="block"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
