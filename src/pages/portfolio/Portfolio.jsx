import GoodyBoy from "./GoodyBoy";
import HealthyHeals from "./Healthy-Heals";
import LifeList from "./LifeList";
import TheMerryWishlsit from "./The-Merry-Wishlist";

export default function Portfolio() {
  return (
    <div className="py-20 bg-[#0E0E0E] drop-shadow-2xl px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <h2 className="text-[#FFFBF5] text-5xl font-black mb-8">All Projects</h2>
      <div className="flex flex-col gap-20">
        <GoodyBoy />
        <LifeList />
        <HealthyHeals />
        <TheMerryWishlsit />
      </div>
    </div>
  );
}
