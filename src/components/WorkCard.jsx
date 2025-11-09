export function WorkCard({ title, src }) {
  return (
    <div className="relative group flex flex-col justify-end gap-[10px] h-[675px] w-full p-[50px] overflow-hidden">
      {/* Image */}
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover 
                   transition-transform duration-[600ms] ease-in-out 
                   group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                   opacity-0 group-hover:opacity-70 
                   transition-opacity duration-500 z-10"
      ></div>

      {/* Title text */}
      <p
        className="title font-medium text-[48px] text-white relative z-20
                   opacity-0 transition-opacity duration-[600ms] ease-in-out
                   group-hover:opacity-100"
      >
        {title}
      </p>
    </div>
  );
}
