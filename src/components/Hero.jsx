import { LuCopy } from "react-icons/lu";

export function Hero() {
  return (
    <div className="h-[867px] font-[inter] px-[80px]">
      <div className="container h-[100vh] max-w-[1600px] min-h-[800px] pt-[140px] pb-[80px] flex flex-col justify-between items-center ">
        <div className="profile  w-full gap-[10px] flex justify-between ">
          <div className="name h-[348px]">
            <div className="firstname h-[174px] text-[174px] font-semibold flex items-center leading-[1em] tracking-[-0.03em]">
              DEVRIKH
            </div>
            <div className="lastname h-[174px] text-[174px] font-semibold flex items-center leading-[1em] tracking-[-0.03em]">
              JATAV
            </div>
          </div>
          <div className="image">
            <img
              src=""
              alt=""
              className="h-[168px] w-[168px] bg-amber-400 rounded-[140px]"
            />
          </div>
        </div>
        <div className="bio w-full flex justify-between h-[176px]">
          <div className="mail flex font-medium text-[26px]">
            devrikhjatav.official@gmail.com
            <div className="h-[20px] mt-2 ml-2.5">
              <LuCopy className="transform scale-x-[-1] scale-y-[-1] h-[20px] w-[20px]" />
            </div>
          </div>
          <div className="hello indent-[2.1em] text-[40px] font-medium  max-w-[643px] leading-[1.1em] tracking-[-0.05em] text-justify">
            Hello, I'm a freelancer specializing in minimal design with 10 years
            of expertise — based in Tokyo, working remote. Let’s create!
          </div>
        </div>
      </div>
    </div>
  );
}
