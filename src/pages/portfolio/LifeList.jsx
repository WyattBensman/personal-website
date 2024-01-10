import { Link } from "react-router-dom";
import MongoIcon from "./icons/mongo";
import ExpressIcon from "./icons/express";
import ReactIcon from "./icons/react";
import NodeIcon from "./icons/node";
import TailwindIcon from "./icons/tailwind";

export default function LifeList() {
  return (
    <div className="flex md:flex-nowrap flex-wrap gap-8">
      <div className="flex flex-col text-white gap-8 md:order-1 order-2">
        <div>
          <h3 className="text-2xl font-bold">LifeList</h3>
          <p className="text-lg font-light">
            I designed and developed the entire website for the LifeList mobile
            application, starting from initial mockups to the implementation of
            early access sign-up forms. This comprehensive approach ensures a
            seamless online presence that aligns with the innovative features
            and user experience offered by the app.
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
              <li>Created all mockups & designs</li>
              <li>Early Access sign up capabilities</li>
              <li>Confirmation email sent upon sign up</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-8 h-full items-end">
          <Link
            to="https://joinlifelist-c2a400d99ff8.herokuapp.com/"
            className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200"
          >
            Live Version
          </Link>
          <Link
            to="https://github.com/WyattBensman/lifelist"
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
