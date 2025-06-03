import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

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
    "./Clients/vindya.png",
  ];

  // Duplicate logos for seamless looping
  const allLogos = [...logos, ...logos];
  
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const marqueeAnimation = () => {
      if (marqueeRef.current) {
        if (marqueeRef.current.scrollLeft >= marqueeRef.current.scrollWidth / 2) {
          marqueeRef.current.scrollLeft = 0;
        } else {
          marqueeRef.current.scrollLeft += 1;
        }
      }
    };
    
    const animationId = setInterval(marqueeAnimation, 20);
    
    return () => clearInterval(animationId);
  }, []);

  return (
    <div className="overflow-hidden relative bg-fixed bg-gradient-to-r from-gray-900 to-gray-800 w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-teal-400 font-semibold text-lg mb-3 tracking-wide">
            OUR TRUSTED PARTNERS
          </h2> 
          <h1 className="text-4xl font-bold text-white mb-6">
            Clients Who Trust NextGen Infratech
          </h1>
        </div>
        
        <div className="relative overflow-hidden">
        
          
          {/* Marquee container */}
          <div>
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="overflow-hidden"
          >
            {logos.map((logo, index) => (
              <div key={index} className="mx-4 md:mx-6">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-16 md:h-28 w-auto object-fill grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
          
          {/* Gradient overlay for right edge */}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ClientsLogoStatic;
