import React from "react";
import Marquee from "react-fast-marquee";

const ClientsCW = () => {
  const logos = [
    "./Clients/TataStudi.png",
    "./Clients/TataClassEdge.png",
    "./Clients/HDB.png",
    "./Clients/CMS.png",
    "./Clients/Healthcare.png",
    "./Clients/vishesh.png",
    "./Clients/finmech_business.png",
    "./Clients/pilrim.png",
    "./Clients/eduonix.png",
    "./Clients/casita.png",
    "./Clients/vindya.png",
    "./Clients/Zenlayer.png",
  ];

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 bg-[#ffffff]">
      <section id="clients" className="text-center px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8 sm:mb-10 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
            Trusted by <br className="hidden md:block" />
            Leading Businesses
          </h3>
          <div className="border-b-2 border-teal-500 w-16 mx-auto mb-6 sm:mb-8"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="overflow-hidden"
          >
            {logos.map((logo, index) => (
              <div key={index} className="mx-3 sm:mx-4 md:mx-6 lg:mx-8">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default ClientsCW;
