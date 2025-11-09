export function About(){
    return (
      <>
        <div className="About relative h-auto w-full  px-[80px] pt-[80px] pb-[160px] flex flex-col justify-center items-center">
          <div className="h-auto w-full max-w-[1600px] flex flex-col gap-[80px] ">
            <div className="header flex justify-between items-center">
              <p className="font-medium text-[30px]">about.</p>
              <div className="btn bg-[#F5F5F5]  flex justify-center items-center gap-10 font-medium text-[16px] px-[36px] py-[20px]">
                Show more
              </div>
            </div>
            <div className="textSection w-full flex justify-between  ">
              <p className="max-w-[728px] text-justify text-[50px] font-medium leading-[1.1em] tracking-[-0.03em]">
                I’m a final-year Computer Science student at IIITV, looking
                for opportunities to work on meaningful projects and grow.
              </p>
            </div>
            <div className="imageSelect flex justify-center items-center gap-[76px] pl-[100px] w-full">
              <div className="img bg-amber-200 w-[553px] h-[400px]"></div>
              <p className="[passage max-w-[311px] text-justify text-[20px] font-medium leading-[1.2em] tracking-[-0.04em] ">
                I care about clarity in systems, consistency in design, and
                writing code that simply does its job. I don’t just explore
                ideas, I build them, ship them, and make sure they hold up.{" "}
              </p>
            </div>
          </div>
        </div>
      </>
    );
}