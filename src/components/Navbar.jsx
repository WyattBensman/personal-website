import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={`absolute z-10 py-4 w-full py-1 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 ${
        isNavOpen ? "bg-white" : ""
      }`}
    >
      {/* Toggler */}
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-white text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded={isNavOpen}
        onClick={toggleNav}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="flex items-center justify-between text-lg font-light">
        <div
          className={`w-full md:block md:w-auto ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex md:flex-row flex-col gap-8 md:mt-0 md:mb-0 mb-2 mt-4 text-center">
            <li>
              <NavLink
                to="/"
                className="hover:text-[#34CC98] ease-in-out duration-200"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:text-[#34CC98] ease-in-out duration-200"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:text-[#34CC98] ease-in-out duration-200"
              >
                CONTACT
              </NavLink>
            </li>
            <li className="md:hidden">
              <NavLink
                to="/"
                className="hover:text-[#34CC98] ease-in-out duration-200"
              >
                RESUME
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="md:block hidden">
          <li>
            <NavLink
              to="/"
              className="hover:text-[#34CC98] ease-in-out duration-200"
            >
              RESUME
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
