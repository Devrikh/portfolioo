import { experience } from "./workContent";

export function Experience() {
  return (
    <div className="w-full px-[80px] pt-[80px] pb-[160px] flex flex-col items-center">
      <div className="max-w-[1600px] w-full flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="font-medium text-[30px]">experience.</p>
          <div className="bg-[#F5F5F5] px-[36px] py-[20px] font-medium text-[16px]">
            2 internships
          </div>
        </div>

        {/* Tiles */}
        <div className="flex flex-col gap-[24px]">
          {experience.map((exp, i) => (
            <ExperienceTile key={i} exp={exp} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceTile({ exp }) {
  return (
    <div className="w-full border border-[#EAEAEA] p-[40px] flex flex-col gap-[24px] group hover:bg-black hover:border-black transition-all duration-200 ease-in-out">
      {/* Top row */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-[6px]">
          <p className="text-[28px] font-medium tracking-tight leading-[1.1] transition-colors duration-300 group-hover:text-white">
            {exp.role}
          </p>
          <p className="text-gray-500 text-[18px] transition-colors duration-300 group-hover:text-gray-300">
            {exp.org}
          </p>
          {/* Publication badge */}
          {exp.publication && (
            <a
              href={exp.publicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit mt-[4px] text-[12px] font-medium px-[12px] py-[5px] bg-[#F5F5F5] text-black group-hover:bg-white/10 group-hover:text-white transition-colors duration-300 flex items-center gap-[8px]"
            >
              Published · {exp.publication}
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50"
              >
                <path
                  d="M1 10L10 1M10 1H4M10 1V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
        <p className="text-gray-500 text-[16px] mt-[6px] transition-colors duration-300 group-hover:text-gray-300 flex-shrink-0">
          {exp.date}
        </p>
      </div>

      {/* Bullets */}
      {exp.bullets && exp.bullets.length > 0 && (
        <ul className="flex flex-col gap-[12px] border-t border-[#EAEAEA] group-hover:border-white/10 pt-[24px] transition-colors duration-300">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-[14px] items-start">
              <span className="text-[#888] group-hover:text-gray-500 text-[12px] mt-[3px] flex-shrink-0 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] text-gray-600 group-hover:text-gray-300 leading-[1.6em] transition-colors duration-300">
                {b}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
