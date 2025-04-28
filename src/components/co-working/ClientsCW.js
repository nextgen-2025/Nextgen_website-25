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
    
    <div>
      <section id="clients" className="text-center pb-10 px-5">
        <div className="my-10 text-center">
          <h3 className="text-3xl font-heading mb-5">
            Trusted by <br className="hidden md:block" />
            Leading Businesses
          </h3>
          <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
        </div>
        <div>
          {rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`overflow-hidden whitespace-nowrap mb-1 ${
                rowIndex % 2 === 0 ? 'animate-marquee-left' : 'animate-marquee-right'
              }`}
            >
              <div className="inline-flex space-x-8">
                {row.map((logo, index) => (
                  <div
                    key={`logo-${rowIndex}-${index}`}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt={`Client Logo ${rowIndex * 3 + index + 1}`}
                      className="w-36 md:w-60 h-auto"
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless loop */}
                {row.map((logo, index) => (
                  <div
                    key={`logo-${rowIndex}-${index}-duplicate`}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt={`Client Logo ${rowIndex * 3 + index + 1}`}
                      className="w-36 md:w-60 h-auto"
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
