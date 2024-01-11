import { InView } from "react-intersection-observer";
import OhioState from "./OhioState";
import UCF from "./UCF";

export default function Education() {
  return (
    <div className="pt-5 pb-20 bg-[#0E0E0E] drop-shadow-2xl">
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
            <div>
              <h2 className="text-[#FFFBF5] text-5xl font-black text-center mb-8">
                Education
              </h2>
              <div className="flex flex-wrap justify-center gap-12">
                <OhioState />
                <UCF />
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
