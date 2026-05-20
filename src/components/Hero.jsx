export function Hero() {
  return (
    <div className="h-[867px] font-[inter] px-[80px]">
      <div className="container h-[100vh] max-w-[1600px] min-h-[800px] pt-[140px] pb-[80px] flex flex-col justify-between items-center">
        <div className="profile w-full gap-[10px] flex justify-between">
          <div className="name h-[348px]">
            <div className="firstname h-[174px] text-[174px] font-semibold flex items-center leading-[1em] tracking-[-0.03em]">
              DEVRIKH
            </div>
            <div className="lastname h-[174px] text-[174px] font-semibold flex items-center leading-[1em] tracking-[-0.03em]">
              JATAV
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="h-[168px] w-[168px] rounded-[140px] overflow-hidden">
              <img
                src="/images/profile.jpeg"
                alt="Devrikh Jatav"
                className="h-full w-full object-cover scale-135 object-[-20%_center]"
              />
            </div>
            <div className="flex flex-col items-end gap-[6px]">
              <span className="text-[13px] font-medium bg-[#F5F5F5] px-[14px] py-[6px] text-black">
                Software Engineer
              </span>
              <span className="text-[13px] text-gray-400 font-medium">
                B.Tech CSE · IIIT Vadodara · 2026
              </span>
            </div>
          </div>
        </div>

        <div className="bio w-full flex justify-between h-[176px]">
          <a
            href="https://mail.google.com/mail/?view=cm&to=devrikhjatav.official@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mail flex font-medium text-[26px] cursor-connect hover:text-black/50 transition-colors duration-200"
          >
            devrikhjatav.official@gmail.com
          </a>
          <div className="hello indent-[2.1em] text-[40px] font-medium max-w-[643px] leading-[1.1em] tracking-[-0.05em] text-justify">
            Software engineer. I build distributed job queues, multi-tenant SaaS
            infrastructure, and battle-tested REST APIs. Open to SDE roles.
          </div>
        </div>
      </div>
    </div>
  );
}
