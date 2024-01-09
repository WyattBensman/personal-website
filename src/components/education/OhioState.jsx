export default function OhioState() {
  return (
    <div className="relative w-[550px] text-center text-white p-12 rounded-lg bg-[#1A1A1A] overflow-hidden">
      <h3 className="text-3xl font-bold relative z-10">
        The Ohio State University
      </h3>
      <h4 className="text-2xl font-light relative z-10">
        Bachelor of Science in Marketing
      </h4>
      <p className="font-light text-sm relative z-10">AUGUST 2019 - MAY 2022</p>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/images/school-logos/ohio-state-buckeye-leaf.png"
          className="w-2/3 h-auto"
          alt="Ohio State University Logo"
        />
      </div>
    </div>
  );
}
