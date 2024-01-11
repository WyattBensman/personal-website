import { InView } from "react-intersection-observer";
import GoodyBoy from "./GoodyBoy";
import HealthyHeals from "./HealthyHeals";
import LifeList from "./LifeList";
import TheMerryWishlist from "./TheyMerryWishlist";

export default function Portfolio() {
  return (
    <div className="pb-20 bg-[#0E0E0E] drop-shadow-2xl px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
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
            <h2 className="text-[#FFFBF5] text-5xl font-black mb-8">
              Portfolio
            </h2>
            <div className="flex flex-wrap gap-8">
              <GoodyBoy />
              <LifeList />
              <HealthyHeals />
              <TheMerryWishlist />
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
