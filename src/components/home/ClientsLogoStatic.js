import React from "react";

const ClientsLogoStatic = () => {
  const logos = [
    "./Clients/TataStudi.png",
    "./Clients/TataClassEdge.png",
    "./Clients/HDB.png",
    "./Clients/CMS.png",
    "./Clients/Healthcare.png",
    "./Clients/vishesh.png",
    "./Clients/finmech.png",
    "./Clients/pilrim.png",
    "./Clients/eduonix.png",
    // "./Clients/casita.png",
    "./Clients/vindya.png",
    // "./Clients/myoperator.png",
    // "./Clients/Zenlayer.png",
  ];
  return (
    <div className="overflow-hidden h-fit relative bg-white w-full">
      <div>
        <div className="my-5">
          <h1 className="text-[#28aa4a] font-bold text-5xl py-5 font-lato">Clients</h1>
          <h3 className="text-[#28aa4a] font-bold text-3xl font-lato">
            Worked With NextGen Infratech
          </h3>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-0 md:grid-cols-3 lg:grid-cols-5 justify-items-center ">
            {logos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className={`flex items-center justify-center ${
                  index === logos.length - 1 ? "" : ""
                }`}
                // col-span-2 md:col-span1
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-36 md:h-48"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogoStatic;
