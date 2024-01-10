export default function HealthyHeals() {
  return (
    <div className="flex md:flex-nowrap flex-wrap gap-8">
      <img
        src="/images/project-covers/healthy-heals-cover.png"
        className="lg:w-[375px] md:w-[300px] md:h-fit"
      />
      <div className="flex flex-col text-white gap-8">
        <div>
          <h3 className="text-2xl font-bold">Healthy Heals</h3>
          <p className="text-lg font-light">
            A platform empowering users to discover, create, and save their
            favorite nutritious dishes on their journey to a healthier
            lifestyle. This versatile platform offers a seamless experience for
            individuals seeking to enhance their well-being through a curated
            collection of wholesome recipes.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Languages Utilized</h4>
          <div className="flex gap-4 text-4xl mt-2">
            <img src="/images/mongodb-svgrepo-com.png" className="w-[36px]" />
            <i className="fa-brands fa-square-js"></i>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-node"></i>
            <img
              src="/images/tailwind-css-svgrepo-com.png"
              className="w-[36px]"
            />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Notable Integrations</h4>
          <div className="flex gap-4 mt-2">
            <ul className="text-lg font-light">
              <li>Login/signup functionality</li>
              <li>Create, update & delete dishes</li>
              <li>Save/unsave dishes to profile</li>
              <li>Image uploading for dishes</li>
              <li>
                Sort dishes by category or creation date for easy navigation
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-8 h-full items-end">
          <button className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200">
            Live Version
          </button>
          <button className="px-4 py-2 w-fit h-fit border b-white rounded hover:bg-white hover:text-[#0E0E0E] duration-200">
            GitHub Repository
          </button>
        </div>
      </div>
    </div>
  );
}
