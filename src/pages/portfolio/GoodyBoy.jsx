import { Link } from "react-router-dom";
import ReactIcon from "./icons/react";
import TailwindIcon from "./icons/tailwind";

export default function GoodyBoy() {
  return (
    <div className="flex md:flex-nowrap flex-wrap gap-8">
      <img
        src="/images/project-covers/goody-boy-cover.png"
        className="lg:w-[375px] md:w-[300px] md:h-fit"
      />
      <div className="flex flex-col text-white gap-8">
        <div>
          <h3 className="text-2xl font-bold">
            Goody Boy Diner Website Redesign
          </h3>
          <p className="text-lg font-light">
            A design focused project, drawing inspiration from the vibrant
            culinary scene of the Goody Boy Diner in Columbus, Ohio. I infused a
            captivating vintage and retro aesthetic that not only elevates the
            brand’s online presence, but also ensures a distinctive and
            memorable experiences for visitors, echoing the charm of the diner
            itself!
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Languages Utilized</h4>
          <div className="flex gap-4 text-4xl mt-2">
            <ReactIcon />
            <TailwindIcon />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Notable Integrations</h4>
          <div className="flex gap-4 text-4xl mt-2">
            <ul className="text-lg font-light">
              <li>Fully Web Responsive Design</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-8 h-full items-end">
          <Link
            to="https://goody-boy-diner-website-redesign.netlify.app/"
            target="_blank"
            className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200"
          >
            Live Version
          </Link>
          <Link
            to="https://github.com/WyattBensman/goody-boy-react"
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
