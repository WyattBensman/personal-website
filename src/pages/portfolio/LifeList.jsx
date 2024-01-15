import { Link } from "react-router-dom";
import MongoIcon from "./icons/mongo";
import ExpressIcon from "./icons/express";
import ReactIcon from "./icons/react";
import NodeIcon from "./icons/node";
import TailwindIcon from "./icons/tailwind";
import { useEffect, useState } from "react";

export default function LifeList() {
  const initialText =
    "A self-inspired, designed & created website for a mobile application called LifeList. From the website design to the mock-ups & concepts, every element has been crafted myself. This all-encompassing website endures a seamless design that not only highlights the innovative features and user experience offered by the app but also provides users with the opportunity to sign up for early access.";

  const [expanded, setExpanded] = useState(false);
  const truncatedText = expanded ? initialText : `${initialText.slice(0, 150)}`;

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      setExpanded(true);
    }
  }, []);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex md:flex-nowrap flex-wrap gap-8">
      <div className="flex flex-col text-white gap-8 md:order-1 order-2">
        <div>
          <h3 className="text-2xl font-bold">LifeList</h3>
          <p className="text-lg font-light">
            {truncatedText}
            {!expanded && (
              <button
                className="text-blue-500 hover:underline cursor-pointer ps-2"
                onClick={toggleExpand}
              >
                Read more
              </button>
            )}
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
          <div className="flex gap-4 text-4xl mt-2">
            <ul className="text-lg font-light">
              <li>Created All Mockups & Designs</li>
              <li>Early Access Sign Up Capabilities</li>
              <li>Email Confirmation Sent Upon Sign Up</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-8 h-full items-end">
          <Link
            to="https://joinlifelist-c2a400d99ff8.herokuapp.com/"
            target="_blank"
            className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200"
          >
            Live Version
          </Link>
          <Link
            to="https://github.com/WyattBensman/lifelist"
            target="_blank"
            className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200"
          >
            GitHub Repository
          </Link>
        </div>
      </div>
      <img
        src="/images/project-covers/lifelist-cover.png"
        className="lg:w-[375px] md:w-[300px] md:h-fit md:order-2 order-1"
      />
    </div>
  );
}
