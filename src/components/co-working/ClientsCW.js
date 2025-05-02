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

  // Split logos into 2 rows of 6 logos each
  const firstRow = logos.slice(0, 6);
  const secondRow = logos.slice(6, 12);

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
          {/* First row - left to right */}
          <div className="overflow-hidden whitespace-nowrap mb-0 relative w-full">
            <div
              className="inline-flex space-x-8 md:space-x-12 lg:space-x-16"
              style={{
                animation: "marquee-left 15s linear infinite",
              }}
            >
              {firstRow.map((logo, index) => (
                <div
                  key={`logo-first-${index}`}
                  className="flex items-center justify-center h-44 sm:h-40 md:h-48 lg:h-56"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="w-64 sm:w-60 md:w-72 lg:w-80 h-auto max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - right to left */}
          <div className="overflow-hidden whitespace-nowrap mb-6 relative w-full">
            <div
              className="inline-flex space-x-8 md:space-x-12 lg:space-x-16"
              style={{
                animation: "marquee-right 15s linear infinite",
                animationDelay: "0s",
              }}
            >
              {secondRow.map((logo, index) => (
                <div
                  key={`logo-second-${index}`}
                  className="flex items-center justify-center h-44 sm:h-40 md:h-48 lg:h-56"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 7}`}
                    className="w-64 sm:w-60 md:w-72 lg:w-80 h-auto max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ClientsCW;
