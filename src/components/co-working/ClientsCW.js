import React from "react";

const ClientsCW = () => {
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
    "./Clients/casita.png",
    "./Clients/vindya.png",
    // "./Clients/myoperator.png",
    "./Clients/Zenlayer.png",
  ];
  return (
    <div>
      <section id="clients" className="text-center pb-10 px-5">
        <div className="my-10 text-center">
          <h3 className="text-3xl font-heading mb-5">
            Trusted by <br className="hidden md:block" />
            Leading Businesses
          </h3>
          <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 gap-0 md:grid-cols-4 justify-items-center ">
          {logos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className={`flex items-center justify-center `}
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="w-36 md:w-60 h-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientsCW;
