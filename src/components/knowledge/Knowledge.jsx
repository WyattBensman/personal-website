import { InView } from "react-intersection-observer";
import Characteristics from "./Characteristics";
import Coding from "./Coding";
import Marketing from "./Marketing";

export default function Knowledge() {
  return (
    <div className="py-20 bg-[#FFFBF5]">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`flex flex-col items-center ${
              inView
                ? "opacity-100 translate-y-0 transition-opacity duration-[1750ms] ease-in-out"
                : "opacity-0 translate-y-20"
            }`}
          >
            <Characteristics />
            <div className="flex flex-wrap w-full justify-center gap-12 mt-12">
              <Coding />
              <Marketing />
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
