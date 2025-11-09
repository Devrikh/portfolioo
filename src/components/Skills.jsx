export function Skills() {
  return (
    <div className="relative h-auto w-full px-[80px] pt-[80px] pb-[160px] flex flex-col justify-center items-center">
      <div className="h-auto w-full max-w-[1600px] flex flex-col gap-[80px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="font-medium text-[30px]">skills.</p>
          <div className="btn bg-[#F5F5F5] flex justify-center items-center gap-10 font-medium text-[16px] px-[36px] py-[20px]">
            Show more
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-y-[40px] gap-x-[80px]">
          {/* Web3 */}
          <div>
            <p className="font-medium text-[20px] mb-[16px]">Web3</p>
            <div className="flex flex-wrap gap-3">
              {[
                "Web3",
                "Solidity",
                "Hardhat",
                "Ethers.js",
                "Web3.js",
                "IPFS",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#F5F5F5] px-4 py-2 rounded-[12px] text-[14px] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Fullstack */}
          <div>
            <p className="font-medium text-[20px] mb-[16px]">Fullstack</p>
            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#F5F5F5] px-4 py-2 rounded-[12px] text-[14px] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <p className="font-medium text-[20px] mb-[16px]">Tools</p>
            <div className="flex flex-wrap gap-3">
              {[
                "Git & GitHub",
                "Docker",
                "WebSockets",
                "Unity",
                "Arduino IDE",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#F5F5F5] px-4 py-2 rounded-[12px] text-[14px] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <p className="font-medium text-[20px] mb-[16px]">Languages</p>
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "TypeScript", "C++", "C", "Python"].map(
                (skill, i) => (
                  <span
                    key={i}
                    className="bg-[#F5F5F5] px-4 py-2 rounded-[12px] text-[14px] font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
