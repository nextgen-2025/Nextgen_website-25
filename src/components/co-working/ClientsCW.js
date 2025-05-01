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
    "./Clients/Zenlayer.png",
  ];

  // Split logos into 4 rows
  const rows = [
    logos.slice(0, 3),
    logos.slice(3, 6),
    logos.slice(6, 9),
    logos.slice(9, 12)
  ];

  return (
    <div className="w-full py-4">
      <section id="clients" className="text-center pb-6 px-3 w-full">
        <div className="my-10 text-center">
          <h3 className="text-3xl font-heading mb-5">
            Trusted by <br className="hidden md:block" />
            Leading Businesses
          </h3>
          <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
        </div>
        <div className="mt-6">
          {rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="overflow-hidden whitespace-nowrap mb-2 relative w-full"
            >
              <div className="inline-flex space-x-4 md:space-x-8 animate-marquee-left" style={{animationDuration: "30s"}}>
                {row.map((logo, index) => (
                  <div
                    key={`logo-${rowIndex}-${index}`}
                    className="flex items-center justify-center h-30 sm:h-28 md:h-32 lg:h-36"
                  >
                    <img
                      src={logo}
                      alt={`Client Logo ${rowIndex * 3 + index + 1}`}
                      className="w-40 sm:w-44 md:w-50 lg:w-65 h-auto max-h-full object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless loop */}
                {row.map((logo, index) => (
                  <div
                    key={`logo-${rowIndex}-${index}-duplicate`}
                    className="flex items-center justify-center h-24 sm:h-28 md:h-32 lg:h-36"
                  >
                    <img
                      src={logo}
                      alt={`Client Logo ${rowIndex * 3 + index + 1}`}
                      className="w-40 sm:w-44 md:w-48 lg:w-56 h-auto max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientsCW;
