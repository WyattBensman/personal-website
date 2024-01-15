import { Link } from "react-router-dom";
import ExpressIcon from "./icons/express";
import MongoIcon from "./icons/mongo";
import NodeIcon from "./icons/node";
import ReactIcon from "./icons/react";
import TailwindIcon from "./icons/tailwind";

export default function TheMerryWishlsit() {
  return (
    <div className="flex md:flex-nowrap flex-wrap gap-8">
      <div className="flex flex-col text-white gap-8 md:order-1 order-2">
        <div>
          <h3 className="text-2xl font-bold">The Merry Wishlist</h3>
          <p className="text-lg font-light">
            A web application designed to streamline the holiday wishlist
            experience. A platform that enables users to effortlessly compile
            and share desired items from various sites onto a single page.
            Leveraging extensive CRUD operations, I ensured a robust and
            user-friendly application, simplifying the process of creating and
            managing festive wishlists.
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
              <li>Login/signup functionality</li>
              <li>Create, update & delete list and items</li>
              <li>Save/unsave functionality</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-8 h-full items-end">
          <Link
            to="https://the-merry-wishlist-5138b687280d.herokuapp.com/login"
            target="_blank"
            className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200"
          >
            Live Version
          </Link>
          <Link
            to="https://github.com/WyattBensman/the-merry-wishlist"
            target="_blank"
            className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200"
          >
            GitHub Repository
          </Link>
        </div>
      </div>
      <img
        src="/images/project-covers/the-merry-wishlist-cover.png"
        className="lg:w-[375px] md:w-[300px] md:h-fit md:order-2 order-1"
      />
    </div>
  );
}
