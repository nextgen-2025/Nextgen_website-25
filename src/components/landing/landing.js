import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Landing = () => {
  const spaceImages = [
    {
      src: "./space-cards/c1.jpg",
      alt: "NextGen Infratech Modern Coworking Space in Mahape - Professional Work Environment",
      type: "main"
    },
    {
      src: "./space-cards/Private Office.webp",
      alt: "Private Cabin Workspace in Navi Mumbai - Fully Furnished Office Space",
      type: "secondary"
    },
    {
      src: "./space-cards/Training Room.webp",
      alt: "Professional Training and Conference Room in Mahape - Corporate Meeting Space",
      type: "secondary"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-gray-800 relative pt-16 md:pt-20 lg:pt-24">
      <div className="absolute inset-0 bg-opacity-20 bg-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 text-white max-w-[600px] text-left">
            <span className="inline-block pt-4 text-teal-400 font-semibold text-base sm:text-lg mb-3 tracking-wide uppercase">
              Coworking Spaces in Mahape, Navi Mumbai
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Empower Your Business at{" "}
              <span className="text-teal-400">NextGen Infratech</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Welcome to NextGen Infratech, your trusted partner for dynamic coworking spaces, innovative digital marketing services, and strategic real estate solutions in Mahape, Navi Mumbai. Our mission is to drive growth and innovation by providing flexible, affordable, and professional environments tailored to your business needs.
            </p>

            <a
              href="https://wa.me/+919930365555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Content Section - Image Grid */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src={spaceImages[0].src}
                  alt={spaceImages[0].alt}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src={spaceImages[1].src}
                  alt={spaceImages[1].alt}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src={spaceImages[2].src}
                  alt={spaceImages[2].alt}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
