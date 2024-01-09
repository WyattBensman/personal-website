export default function UCF() {
  return (
    <div className="relative w-[550px] text-center text-white p-12 rounded-lg bg-[#1A1A1A] overflow-hidden">
      <h3 className="text-3xl font-bold relative z-10">
        University of Central Florida
      </h3>
      <h4 className="text-2xl font-light relative z-10">
        Full Stack Web Development Certificate
      </h4>
      <p className="font-light text-sm relative z-10">
        JUNE 2023 - SEPTEMBER 2023
      </p>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/images/ucf-knight.png"
          className="w-2/3 h-auto"
          alt="Ohio State University Logo"
        />
      </div>
    </div>
  );
}
