export function Navbar() {
  return (
    <>
      <div className="absolute w-full top-0 left-0">
        <div className="h-[93px] p-[30px] flex items-center border-b border-[#F5F5F5]  ">
          <div className=" font-[inter] flex w-full justify-between">
            <div className="font-bold  text-[30px] leading-[1.1em] tracking-[-0.03em]">
              DEJA
            </div>
            <div className="flex font-medium items-center gap-[30px] text-[18px]">
              <p>Works</p>
              <p>About</p>
              <p>Contact</p>
              
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" y="0" width="30" height="30" fill="black" />
                  <rect x="70" y="0" width="30" height="30" fill="black" />
                  <rect x="0" y="70" width="30" height="30" fill="black" />
                  <rect x="70" y="70" width="30" height="30" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
