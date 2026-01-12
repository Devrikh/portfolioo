export function Footer() {
  return (
    <>
      <div className="w-full px-[80px] flex flex-col justify-center items-center bg-black">
        <div className="h-[100vh] max-w-[1600px]  w-full flex flex-col justify-between items-center py-[60px]">
          <div className="socials w-full text-white flex justify-end items-center gap-[26px]">
            <a
              href="https://www.linkedin.com/in/devrikh-jatav-6bb512256/"
              className="font-medium text-[16px] text-justify cursor-grow"
            >
              Linkedin
            </a>
            <a
              href="https://x.com/Devrikh_jatav"
              className="font-medium text-[16px] text-justify cursor-grow"
            >
              Twitter
            </a>
            <a
              href="https://github.com/Devrikh"
              className="font-medium text-[16px] text-justify cursor-grow"
            >
              Github
            </a>
          </div>
          <div className="CTASec w-full flex flex-col justify-center items-start gap-[40px]">
            <div className="content flex justify-between w-full ">
              <p className="font-medium text-[48px] leading-[1.2em] tracking-[-0.05em]  bg-gradient-to-r from-white via-white to-neutral-800 bg-clip-text text-transparent">
                Exploring what we can build in Web3? <br />
                Let’s turn an idea into something real and onchain.
              </p>
            </div>
            <div className="CTA flex justify-start items-center gap-[40px]">
              <a
                href="https://drive.google.com/file/d/1mQEByzrE2u07uiX3PJrcxKAW4if_Risx/view?usp=drive_link"
                className="btn cursor-grow bg-[#F5F5F5] transition-colors duration-300 hover:bg-white/20 hover:text-white flex justify-center items-center gap-10 font-medium text-[16px] px-[36px] py-[20px] leading-[1.2em] tracking-[-0.04em] text-justify"
              >
                Resume
              </a>
              <div className="available flex justify-center items-center gap-[16px]">
                <div className="pulse flex justify-center items-center">
                  <div className="relative h-[10px] w-[10px] rounded-[20px] bg-white"></div>
                  <div className="absolute h-[10px] w-[10px] rounded-[20px] bg-white z-10 animate-[ping_2s_ease-in-out_infinite]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[1.6em] text-white">
                  Available For Work
                </p>
              </div>
            </div>
          </div>
          <div className="FooteDetials text-white w-full flex justify-between">
            <div className="info flex justify-start gap-[170px] items-center">
              <p className="font-normal text-[16px] leading-[1.6em]">
                +91 8791935630 <br /> devrikhjatav.official@gmail.com
              </p>
              <p className="font-normal text-[16px] leading-[1.6em]">
                Design Inspired by <br />
                Peter Hodak
              </p>
            </div>
            <p className="font-normal text-[16px] leading-[1.6em]">
              All rights reserved,
              <br />
              DEJA ©2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
