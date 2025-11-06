export function Work(){
    return (
      <div className="flex-col justify-center px-[80px] pb-[80px] pt-[30px]">
        <div className="h-auto  gap-[36px] flex-col justify-center items-center max-w-[1600px]">
          <div className="workHeader flex justify-between items-center">
            <p className="font-medium text-[30px]">work.</p>
            <div className="btn bg-[#F5F5F5]  flex justify-center items-center gap-10 font-medium text-[16px] px-[36px] py-[20px]">
              Show more
            </div>
          </div>
          <div className="works grid grid-cols-2 gap-[20px]">
            <div className=" relative group flex flex-col justify-end gap-[10px] h-[600px] w-full  p-[50px] ">
              <div className="absolute z-0 inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <p className="title  font-medium text-[48px] relative z-10">
                Nike Air
              </p>
            </div>
            <div className=" relative group flex flex-col justify-end gap-[10px] h-[600px] w-full  p-[50px] ">
              <div className="absolute z-0 inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <p className="title  font-medium text-[48px] relative z-10">
                Nike Air
              </p>
            </div>
            <div className=" relative group flex flex-col justify-end gap-[10px] h-[600px] w-full  p-[50px] ">
              <div className="absolute z-0 inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <p className="title  font-medium text-[48px] relative z-10">
                Nike Air
              </p>
            </div>
            <div className=" relative group flex flex-col justify-end gap-[10px] h-[600px] w-full  p-[50px] ">
              <div className="absolute z-0 inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <p className="title  font-medium text-[48px] relative z-10">
                Nike Air
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}