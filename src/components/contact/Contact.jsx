import { Link } from "react-router-dom";
import Form from "./Form";
import { InView } from "react-intersection-observer";

export default function Contact() {
  return (
    <div className="py-20 bg-[#FFFBF5] h-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 md:grid grid-cols-2 gap-8">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${
              inView
                ? "opacity-100 translate-y-0 transition-opacity duration-[1750ms] ease-in-out"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h2 className="text-5xl font-black mb-8">Get in touch</h2>
            <p className="text-xl font-light">
              Feel free to reach out with any potential opportunities, or simply
              to have a chat
            </p>
            <div className="flex flex-col gap-4 mt-8 text-[#0E0E0E]">
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-envelope text-3xl"></i>
                <p className="text-xl font-light">Wyattbensman5@gmail.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-phone text-3xl"></i>
                <p className="text-xl font-light">937-726-6082</p>
              </div>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-location-dot text-3xl"></i>
                <p className="text-xl font-light">Tampa, Florida</p>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <Link
                to="https://www.linkedin.com/in/wyatt-bensman-22840619b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-4xl text-[#0E0E0E] hover:text-gray-600 duration-200"></i>
              </Link>
              <Link to="https://github.com/WyattBensman" target="_blank">
                <i className="fa-brands fa-square-github text-4xl text-[#0E0E0E] hover:text-gray-600 duration-200"></i>
              </Link>
            </div>
          </div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${
              inView
                ? "opacity-100 translate-y-0 transition-opacity duration-[1750ms] ease-in-out"
                : "opacity-0 translate-y-20"
            }`}
          >
            <Form />
          </div>
        )}
      </InView>
    </div>
  );
}
