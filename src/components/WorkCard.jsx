import { useState } from "react";

export function WorkCard({
  title,
  subtitle,
  src,
  href,
  tech = [],
  bullets = [],
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Image area */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative group flex flex-col justify-end gap-[10px] h-[560px] w-full p-[50px] overflow-hidden cursor-grow">
          <img
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-[600ms] ease-in-out
                     group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-500 z-10"
          />
          <div className="relative z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms]">
            <p className="font-medium text-[48px] text-white leading-[1em] tracking-tight">
              {title}
            </p>
            <p className="text-white/70 text-[18px] font-medium mt-1">
              {subtitle}
            </p>
          </div>
        </div>
      </a>

      {/* Info area — always visible below the image */}
      <div className="border border-[#EAEAEA] p-[32px] flex flex-col gap-[20px]">
        {/* Header row */}
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium text-[22px] tracking-tight">{title}</p>
            <p className="text-gray-500 text-[15px] mt-[2px]">{subtitle}</p>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium border border-[#EAEAEA] px-[16px] py-[8px]
                       hover:bg-black hover:text-white hover:border-black
                       transition-all duration-200 cursor-grow whitespace-nowrap"
          >
            View Project ↗
          </a>
        </div>

        {/* Tech badges */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-[8px]">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-[12px] font-medium px-[12px] py-[5px] bg-[#F5F5F5] text-black"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Expand toggle */}
        {bullets.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-[8px] text-[13px] font-medium text-gray-500
                         hover:text-black transition-colors duration-200 w-fit cursor-grow"
            >
              <span
                className={`inline-block transition-transform duration-300 ${expanded ? "rotate-90" : "rotate-0"}`}
              >
                →
              </span>
              {expanded ? "Hide details" : "What I built"}
            </button>

            {/* Bullets — animated expand */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex flex-col gap-[12px] pt-[4px]">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-[12px] items-start">
                    <span className="text-[#888] text-[12px] mt-[4px] flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[14px] text-gray-600 leading-[1.6em]">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
