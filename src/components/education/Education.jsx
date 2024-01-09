import OhioState from "./OhioState";
import UCF from "./UCF";

export default function Education() {
  return (
    <div className="pt-5 pb-20 bg-[#0E0E0E] drop-shadow-2xl">
      <h2 className="text-[#FFFBF5] text-5xl font-black text-center mb-8">
        Education
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        <OhioState />
        <UCF />
      </div>
    </div>
  );
}
