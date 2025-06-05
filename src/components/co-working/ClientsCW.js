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
    "./Clients/finmech.png",
    "./Clients/pilrim.png",
    "./Clients/eduonix.png",
    "./Clients/casita.png",
    "./Clients/vindya.png",
    "./Clients/Zenlayer.png",
  ];

  return (
    <div className="w-full py-4">
      <section id="clients" className="text-center pb-6 px-3 w-full">
        <div className="my-10 text-center">
          <h3 className="text-3xl font-semibold mb-5">
            Trusted by <br className="hidden md:block" />
            Leading Businesses
          </h3>
          <div className="border-b-2 border-teal-500 w-16 mx-auto mb-8"></div>
        </div>

        <div>
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="overflow-hidden"
          >
            {logos.map((logo, index) => (
              <div key={index} className="mx-4 md:mx-8">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-20 md:h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
