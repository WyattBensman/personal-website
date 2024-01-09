import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownloadResume = () => {
    const resumePath = "/images/Wyatt-Bensman-Resume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Wyatt-Bensman-Resume.pdf";
    link.click();
  };

  return (
    <nav
      className={`fixed top-0 z-10 py-4 w-full py-1 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 ${
        isNavOpen || isScrolled
          ? "bg-white transition-all duration-300"
          : "transition-all duration-300"
      } ${isNavOpen ? "bg-opacity-100" : "bg-opacity-20"}`}
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
                className={`hover:text-[#34CC98] ease-in-out duration-200 ${
                  location.pathname === "/portfolio" && "text-white"
                }`}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={`hover:text-[#34CC98] ease-in-out duration-200 ${
                  location.pathname === "/portfolio" && "text-white"
                }`}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`hover:text-[#34CC98] ease-in-out duration-200 ${
                  location.pathname === "/portfolio" && "text-white"
                }`}
              >
                CONTACT
              </NavLink>
            </li>
            <li className="md:hidden">
              <button
                onClick={handleDownloadResume}
                className={`hover:text-[#34CC98] ease-in-out duration-200 ${
                  location.pathname === "/portfolio" && "text-white"
                }`}
              >
                RESUME
              </button>
            </li>
          </ul>
        </div>
        <ul className="md:block hidden">
          <li>
            <button
              onClick={handleDownloadResume}
              className={`border px-4 py-2 rounded-xl ease-in-out duration-200 ${
                location.pathname === "/portfolio"
                  ? "text-white border-white hover:bg-white hover:text-black"
                  : "text-black border-black hover:bg-black  hover:text-white"
              }`}
            >
              RESUME
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
