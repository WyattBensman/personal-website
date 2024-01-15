import { InView } from "react-intersection-observer";
import GoodyBoy from "./GoodyBoy";
import HealthyHeals from "./Healthy-Heals";
import LifeList from "./LifeList";
import TheMerryWishlsit from "./The-Merry-Wishlist";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const scrollOffset = 100;

        const elementPosition = element.offsetTop - scrollOffset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    };

    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      scrollToSection(sectionId);
    } else {
      scrollToTop();
    }
  }, []);

  return (
    <div className="py-28 bg-[#0E0E0E] drop-shadow-2xl px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
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
              Projects
            </h2>
          </div>
        )}
      </InView>
      <div className="flex flex-col gap-20">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              id="goodyBoy"
              className={`${
                inView
                  ? "opacity-100 translate-y-0 transition-opacity duration-[1750ms] ease-in-out"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <GoodyBoy />
            </div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              id="lifelist"
              ref={ref}
              className={`${
                inView
                  ? "opacity-100 translate-y-0 transition-opacity duration-[1750ms] ease-in-out"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <LifeList />
            </div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              id="healthyHeals"
              className={`${
                inView
                  ? "opacity-100 translate-y-0 transition-opacity duration-[1750ms] ease-in-out"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <HealthyHeals />
            </div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              id="theMerryWishlist"
              className={`${
                inView
                  ? "opacity-100 translate-y-0 transition-opacity duration-[1750ms] ease-in-out"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <TheMerryWishlsit />
            </div>
          )}
        </InView>
      </div>
    </div>
  );
}
