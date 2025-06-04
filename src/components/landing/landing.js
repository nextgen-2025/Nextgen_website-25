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
    <section className="w-full bg-gradient-to-r from-gray-900 to-gray-800 relative pt-8 ">
      <div className="absolute inset-0 bg-opacity-20 bg-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 text-white max-w-[600px] text-left p-4">
            <span className="inline-block text-teal-400 font-semibold text-lg mb-3 tracking-wide uppercase">
              Coworking Spaces in Mahape, Navi Mumbai
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Empower Your Business at{" "}
              <span className="text-teal-400">NextGen Infratech</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-normal ">
              Welcome to NextGen Infratech, your trusted partner in providing
              dynamic coworking spaces, cutting-edge digital marketing services,
              and strategic real estate solutions in Mahape, Navi Mumbai. Our
              mission is to foster growth and innovation by offering flexible,
              affordable, and professional environments tailored to your
              business needs.
            </p>

            <a
              href="https://wa.me/+919930365555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>
          <div className="w-full lg:w-5/12 space-y-4">
            {/* Main Image */}
            {spaceImages.filter(img => img.type === "main").map((image, index) => (
              <div key={`main-${index}`} className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
            {/* Secondary Images */}
            <div className="flex gap-4">
              {spaceImages.filter(img => img.type === "secondary").map((image, index) => (
                <div key={`secondary-${index}`} className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 flex-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
