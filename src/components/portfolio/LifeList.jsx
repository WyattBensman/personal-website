import { useState } from "react";

export default function LifeList() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/images/project-covers/lifelist-cover.png"
        className={`md:h-[450px] md:w-[336px] ${
          isHovered ? "opacity-50 duration-200" : ""
        }`}
        alt="LifeList Web Design"
      />
      <h1 className="absolute bottom-0 left-0 text-lg font-light text-white pl-2 pb-1 hover:text-gray-300 duration-200">
        LifeList Web Design
      </h1>
    </div>
  );
}
