export default function Header() {
  return (
    <>
      <img
        src="/images/mountain-cover-art.jpeg"
        className="h-screen w-full bg-cover relative"
        style={{ backgroundImage: "url(/images/mountain-cover-art.jpeg)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 md:mt-[14%] md:ms-20 mt-32 md:text-left text-center  h-full w-fit">
        <h1 className="md:text-8xl text-5xl font-black">WYATT BENSMAN</h1>
        <p className="md:text-xl text-xl font-light max-w-[882px] md:mt-0 mt-2">
          Based in Tampa, a results-driven individual with a consumer-centric
          approach seeking to apply & enhance digital marketing expertise
        </p>
        <div className="flex justify-center my-10 gap-4">
          <button className="border-[1.5px] border-white rounded-xl md:px-8 px-6 md:py-4 py-3 md:text-2xl text-xl text-white font-light hover:bg-white hover:text-black duration-200">
            Resume
          </button>
          <button className="border-[1.5px] border-white rounded-xl md:px-8 px-6 md:py-4 py-3 md:text-2xl text-xl text-white font-light hover:bg-white hover:text-black duration-200">
            Portfolio
          </button>
        </div>
      </div>
    </>
  );
}
