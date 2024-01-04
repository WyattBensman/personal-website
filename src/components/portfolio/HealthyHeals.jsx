import { useState } from "react";

export default function HealthyHeals() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/images/project-covers/healthy-heals-cover.png"
        className={`md:h-[450px] md:w-[336px] ${
          isHovered ? "opacity-50 duration-200" : ""
        }`}
        alt="Healthy Heals"
      />
      <h1 className="absolute bottom-0 left-0 text-lg font-light text-white pl-2 pb-1 hover:text-gray-300 duration-200">
        Healthy Heals
      </h1>
    </div>
  );
}
