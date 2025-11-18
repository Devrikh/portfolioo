import {
  SiSolidity,
  SiEthers,
  SiWeb3Dotjs,
  SiIpfs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiPython,
  SiGit,
  SiDocker,
  SiPostman,
  SiFigma,
  SiMysql,
  SiBootstrap,
  SiFlask
} from "react-icons/si";

import { GiMiningHelmet } from "react-icons/gi";
import { FaFlask, FaHardHat } from "react-icons/fa";



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

        {/* Rows */}
        {/* Web3 */}
        <SkillRow
          title="Web3"
          icons={[
            { Icon: SiSolidity, color: "#363636", label: "Solidity" },
            { Icon: FaHardHat, color: "#f7c52e", label: "Hardhat" },
            { Icon: SiEthers, color: "#4c69ff", label: "Ethers.js" },
            { Icon: SiWeb3Dotjs, color: "#f16822", label: "Web3.js" },
            { Icon: SiIpfs, color: "#56c2a5", label: "IPFS" },
          ]}
        />

        {/* Fullstack */}
        <SkillRow
          title="Fullstack"
          icons={[
            { Icon: SiReact, color: "#61dafb", label: "React.js" },
            { Icon: SiNodedotjs, color: "#3c873a", label: "Node.js" },
            { Icon: SiExpress, color: "#000000", label: "Express.js" },
            { Icon: SiMongodb, color: "#4db33d", label: "MongoDB" },
            { Icon: SiMysql, color: "#00758f", label: "MySQL" },
            { Icon: SiTailwindcss, color: "#38bdf8", label: "Tailwind CSS" },
            { Icon: SiBootstrap, color: "#7952b3", label: "Bootstrap 5" },
            { Icon: SiFlask, color: "#000000", label: "Flask" },
            { Icon: SiGit, color: "#f34f29", label: "Git" },
            { Icon: SiDocker, color: "#2496ed", label: "Docker" },
            { Icon: SiPostman, color: "#ef5b25", label: "Postman" },
            { Icon: SiFigma, color: "#a259ff", label: "Figma" },
          ]}
        />

        {/* Languages */}
        <SkillRow
          title="Languages"
          icons={[
            { Icon: SiJavascript, color: "#f7df1e", label: "JavaScript" },
            { Icon: SiTypescript, color: "#3178c6", label: "TypeScript" },
            { Icon: SiCplusplus, color: "#00599c", label: "C++" },
            { Icon: SiC, color: "#283593", label: "C" },
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
