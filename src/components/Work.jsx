import { WorkCard } from "./WorkCard";
import { experience, projects } from "./workcontent";

export function Work(){
    return (
      <div className="flex-col justify-center px-[80px] pb-[80px] pt-[30px]">
        <div className="h-auto flex gap-[36px] flex-col justify-center items-center max-w-[1600px]">
          <div className="workHeader w-full flex justify-between items-center">
            <p className="font-medium text-[30px]">work.</p>
            <div className="btn bg-[#F5F5F5]  flex justify-center items-center gap-10 font-medium text-[16px] px-[36px] py-[20px]">
              Show more
            </div>
          </div>
          <div className="works grid grid-cols-2 gap-[20px]">
            {projects.map((p, i) => (
              <WorkCard key={i} title={p.title} src={p.src} />
            ))}
          </div>
        </div>
      </div>
    );
}