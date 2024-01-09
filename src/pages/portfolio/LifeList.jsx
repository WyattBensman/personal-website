export default function LifeList() {
  return (
    <div className="flex md:flex-nowrap flex-wrap gap-8">
      <div className="flex flex-col text-white gap-8 md:order-1 order-2">
        <div>
          <h3 className="text-2xl font-bold">LifeList</h3>
          <p className="text-lg font-light">
            Lorem asdf adf adsf adsf aadf adf adf adf akdjf alkjsdf;lk jasd;lfkj
            a;dlskfj a;lkdsjf;l akdjsf;lk ajsd;lfkj asd;lkfj Lorem asdf adf adsf
            adsf aadf adf adf adf akdjf alkjsdf;lk jasd;lfkj a;dlskfj a;lkdsjf;l
            akdjsf;lk ajsd;lfkj asd;lkfj Lorem asdf adf adsf adsf aadf adf adf
            adf akdjf alkjsdf;lk jasd;lfkj a;dlskfj a;lkdsjf;l akdjsf;lk
            ajsd;lfkj asd;lkfj{" "}
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
          <div className="flex gap-4 text-4xl mt-2">
            <p className="text-lg font-light">
              Lorem asdf adf adsf adsf aadf adf adf adf akdjf alkjsdf;lk
              jasd;lfkj a;dlskfj a;lkdsjf;l akdjsf;lk ajsd;lfkj asd;lkfj Lorem
              asdf adf adsf adsf aadf adf adf adf akdjf alkjsdf;lk jasd;lfkj
              a;dlskfj a;lkdsjf;l akdjsf;lk ajsd;lfkj asd;lkfj Lorem asdf adf
              adsf adsf aadf adf adf adf akdjf alkjsdf;lk jasd;lfkj a;dlskfj
              a;lkdsjf;l akdjsf;lk ajsd;lfkj asd;lkfj{" "}
            </p>
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
      <img
        src="/images/project-covers/lifelist-cover.png"
        className="lg:w-[375px] md:w-[300px] md:h-fit md:order-2 order-1"
      />
    </div>
  );
}