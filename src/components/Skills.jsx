import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiSocketdotio,
  SiPython,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiFigma,
  SiPrisma,
  SiGithub,
  SiTurborepo,
} from "react-icons/si";




export function Skills() {
  return (
    <div className="w-full px-[80px] pt-[80px] pb-[160px] flex flex-col items-center">
      <div className="max-w-[1600px] w-full flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="font-medium text-[30px]">skills.</p>
          <div className="bg-[#F5F5F5] px-[36px] py-[20px] font-medium text-[16px]">
            More soon
          </div>
        </div>

        {/* Backend */}
        <SkillRow
          title="Backend"
          icons={[
            { Icon: SiNodedotjs, color: "#3c873a", label: "Node.js" },
            { Icon: SiExpress, color: "#000000", label: "Express.js" },
            { Icon: SiSocketdotio, color: "#010101", label: "WebSockets" },
          ]}
        />

        {/* Frontend */}
        <SkillRow
          title="Frontend"
          icons={[
            { Icon: SiReact, color: "#61dafb", label: "React.js" },
            { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
            { Icon: SiTailwindcss, color: "#38bdf8", label: "Tailwind CSS" },
            { Icon: SiFigma, color: "#a259ff", label: "Figma" },
          ]}
        />

        {/* Databases */}
        <SkillRow
          title="Databases & ORM"
          icons={[
            { Icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
            { Icon: SiMongodb, color: "#4db33d", label: "MongoDB" },
            { Icon: SiPrisma, color: "#2d3748", label: "Prisma" },
          ]}
        />

        {/* Tools */}
        <SkillRow
          title="Tools & DevOps"
          icons={[
            { Icon: SiGit, color: "#f34f29", label: "Git" },
            { Icon: SiGithub, color: "#000000", label: "GitHub" },
            { Icon: SiDocker, color: "#2496ed", label: "Docker" },
            { Icon: SiTurborepo, color: "#ef4444", label: "Turborepo" },
          ]}
        />

        {/* Languages */}
        <SkillRow
          title="Languages"
          icons={[
            { Icon: SiJavascript, color: "#f7df1e", label: "JavaScript" },
            { Icon: SiTypescript, color: "#3178c6", label: "TypeScript" },
            { Icon: SiCplusplus, color: "#00599c", label: "C++" },
            { Icon: SiPython, color: "#3776ab", label: "Python" },
          ]}
        />
      </div>
    </div>
  );
}

function SkillRow({ title, icons }) {
  return (
    <div className="flex items-center gap-[40px]">
      {/* Section title */}
      <p className="w-[150px] font-medium text-[20px]">{title}</p>

      {/* Icons */}
      <div className="flex flex-row items-center gap-6">
        {icons.map(({ Icon, color, label }, i) => (
          <div
            key={i}
            className="relative group flex items-center justify-center"
          >
            {/* The icon */}
            <Icon
              size={40}
              color={color}
              className="
                skill-icon
                transition-all duration-300 ease-out
                hover:scale-[1.2]
                hover:-translate-y-[2px]
                hover:rotate-[1deg]
                cursor-none
              "
            />

            {/* Tooltip */}
            <div
              className="
                absolute bottom-[50px] left-1/2 -translate-x-1/2
                opacity-0 group-hover:opacity-100
                translate-y-1 group-hover:translate-y-0
                transition-all duration-200 ease-out
                bg-black text-white text-[12px]
                px-2 py-1  whitespace-nowrap
              "
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
