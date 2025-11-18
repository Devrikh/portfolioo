export function Experience() {
  const experiences = [
    {
      role: "Research Intern",
      org: "IIITV",
      date: "May 2025 – Jul 2025",
    },
    {
      role: "Founding Member",
      org: "Droid Robotics Club — IIITV",
      date: "Sep 2023 – Jul 2025",
    },
  ];

  return (
    <div className="w-full px-[80px] pt-[80px] pb-[160px] flex flex-col items-center">
      <div className="max-w-[1600px] w-full flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="font-medium text-[30px]">experience.</p>
          <div className="bg-[#F5F5F5] px-[36px] py-[20px] font-medium text-[16px]">
            More soon
          </div>
        </div>

        {/* Tiles */}
        <div className="flex flex-col gap-[24px]">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="
                w-full border border-[#EAEAEA]
                p-[40px] flex justify-between
                rounded-none
                transition-all duration-100
                group
                hover:bg-black hover:border-black ease-in-out
              "
            >
              {/* Left side */}
              <div className="flex flex-col">
                <p
                  className="text-[28px] font-medium tracking-tight leading-[1.1]
                  transition-colors duration-300 group-hover:text-white
                "
                >
                  {exp.role}
                </p>
                <p
                  className="text-gray-500 text-[18px] mt-[6px]
                  transition-colors duration-300 group-hover:text-gray-300
                "
                >
                  {exp.org}
                </p>
              </div>

              {/* Right side (asymmetrical placement) */}
              <div className="flex items-end">
                <p
                  className="text-gray-500 text-[16px] mb-[4px]
                  transition-colors duration-300 group-hover:text-gray-300
                "
                >
                  {exp.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
