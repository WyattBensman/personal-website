import Form from "./Form";

export default function Contact() {
  return (
    <div className="py-20 bg-[#FFFBF5] h-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 md:grid grid-cols-2 gap-8">
      <div>
        <h2 className="text-5xl font-black mb-8">Get in touch</h2>
        <p className="text-xl font-light">
          Feel free to reach out with any potential opportunities, or simply to
          have a chat
        </p>
        <div className="flex flex-col gap-4 mt-8 text-[#0E0E0E]">
          <div className="flex gap-4 items-center">
            <i className="fa-solid fa-envelope text-3xl"></i>
            <p className="text-2xl font-light">Wyattbensman5@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <i className="fa-solid fa-phone text-3xl"></i>
            <p className="text-2xl font-light">937-726-6082</p>
          </div>
          <div className="flex gap-4 items-center">
            <i className="fa-solid fa-location-dot text-3xl"></i>
            <p className="text-2xl font-light">Tampa, Florida</p>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <i className="fa-brands fa-linkedin text-4xl text-[#0E0E0E]"></i>
          <i className="fa-brands fa-square-github text-4xl text-[#0E0E0E]"></i>
        </div>
      </div>
      <Form />
    </div>
  );
}
