import Characteristics from "./Characteristics";
import Coding from "./Coding";
import Marketing from "./Marketing";

export default function Knowledge() {
  return (
    <div className="py-20 bg-[#FFFBF5]">
      <div className="flex flex-col items-center">
        <Characteristics />
        <div className="flex flex-wrap w-full justify-center gap-12 mt-12">
          <Coding />
          <Marketing />
        </div>
      </div>
    </div>
  );
}
