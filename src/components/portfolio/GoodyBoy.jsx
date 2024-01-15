import { useState } from "react";
import { Link } from "react-router-dom";

export default function GoodyBoy() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      id="goodyBoy"
      to="/portfolio#goodyBoy"
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/images/project-covers/goody-boy-cover.png"
        className={`md:h-[450px] md:w-[336px] ${
          isHovered ? "opacity-50 duration-200" : ""
        }`}
        alt="Goody Boy Diner Website Redesign"
      />
      <h1 className="absolute bottom-0 left-0 text-lg font-light text-white pl-2 pb-1 hover:text-gray-300 duration-200">
        Goody Boy Website Redesign
      </h1>
    </Link>
  );
}
