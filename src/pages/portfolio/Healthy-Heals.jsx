import { Link } from "react-router-dom";
import ExpressIcon from "./icons/express";
import MongoIcon from "./icons/mongo";
import NodeIcon from "./icons/node";
import ReactIcon from "./icons/react";
import TailwindIcon from "./icons/tailwind";

export default function HealthyHeals() {
  return (
    <div className="flex md:flex-nowrap flex-wrap gap-8">
      <img
        src="/images/project-covers/healthy-heals-cover.png"
        className="lg:w-[375px] md:w-[300px] md:h-fit"
      />
      <div className="flex flex-col text-white gap-8">
        <div>
          <h3 className="text-2xl font-bold">Healthy Heals</h3>
          <p className="text-lg font-light">
            A platform empowering users to discover, create, and save their
            favorite nutritious dishes on their journey to a healthier
            lifestyle. This versatile platform offers a seamless experience for
            individuals seeking to enhance their well-being through a curated
            collection of wholesome recipes.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Languages Utilized</h4>
          <div className="flex gap-4 text-4xl mt-2">
            <MongoIcon />
            <ExpressIcon />
            <ReactIcon />
            <NodeIcon />
            <TailwindIcon />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Notable Integrations</h4>
          <div className="flex gap-4 mt-2">
            <ul className="text-lg font-light">
              <li>Login/Sign Up Functionality</li>
              <li>Create, Update & Delete Dishes</li>
              <li>Save/Unsave Dishes to Profile</li>
              <li>Image Uploading for Dishes</li>
              <li>Sort Dishes by Category or Creation Time</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-8 h-full items-end">
          <Link
            to="https://healthy-heals-a07e8233d175.herokuapp.com/"
            target="_blank"
            className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200"
          >
            Live Version
          </Link>
          <Link
            to="https://github.com/WyattBensman/healthy-heals"
            target="_blank"
            className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200"
          >
            GitHub Repository
          </Link>
        </div>
      </div>
    </div>
  );
}
