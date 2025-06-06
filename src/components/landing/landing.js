import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Landing = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-gray-800 relative pt-20 md:pt-24 lg:pt-12 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-opacity-30 bg-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-full relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Centered Content Section */}
          <div className="w-full max-w-4xl text-white">
            <span className="inline-block pt-4 text-teal-400 font-semibold text-base sm:text-lg mb-4 tracking-wider uppercase border-b-2 border-teal-400 pb-2">
              Coworking Spaces in Mahape, Navi Mumbai
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Empower Your Business at{" "}
              <span className="text-teal-400 relative">
                NextGen Infratech
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl mb-8 sm:mb-10 mx-auto px-4 sm:px-20 leading-relaxed">
              Welcome to NextGen Infratech, your trusted partner for dynamic coworking spaces, innovative digital marketing services, and strategic real estate solutions in Mahape, Navi Mumbai. Our mission is to drive growth and innovation by providing flexible, affordable, and professional environments tailored to your business needs.
            </p>

            <a
              href="https://wa.me/+919930365555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg font-semibold transform hover:scale-105"
            >
              <FaWhatsapp size={24} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
