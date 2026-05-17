import { WorkCard } from "./WorkCard";
import { projects } from "./workContent";

export function Work() {
  return (
    <div
      id="work"
      className="flex-col justify-center px-[80px] pb-[80px] pt-[30px]"
    >
      <div className="h-auto flex gap-[36px] flex-col justify-center items-center max-w-[1600px]">
        <div className="workHeader w-full flex justify-between items-center">
          <p className="font-medium text-[30px]">work.</p>
          <div className="btn bg-[#F5F5F5] flex justify-center items-center gap-10 font-medium text-[16px] px-[36px] py-[20px]">
            More soon
          </div>
        </div>
        <div className="works grid grid-cols-2 gap-[20px] w-full">
          {projects.map((p, i) => (
            <WorkCard
              key={i}
              title={p.title}
              subtitle={p.subtitle}
              src={p.src}
              href={p.link}
              tech={p.tech}
              bullets={p.bullets}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
