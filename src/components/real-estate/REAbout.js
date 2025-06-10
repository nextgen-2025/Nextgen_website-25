import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const REAbout = () => {
  return (
    <div className="re-banner-abt bg-fixed md:h-[100vh] flex items-center px-10 md:px-20 py-5 md:py-0">
      <div className="md:w-[50%] flex flex-col gap-5 py-2 text-white">
        <div>
          <h2 className="text-gray-300 font-bold text-start py-4 md:py-0">
            About Us
          </h2>
          <h1 className="md:pt-2  text-teal-400 font-semibold text-2xl md:text-[45px] md:leading-[66px] tracking-wide text-start">
            Leaders in Real Estate Development and Innovation
          </h1>
        </div>
        <p className="text-justify md:w-[94%] text-[17px] text-white">
          Vishesh Group is a premier construction and real estate company that
          also provides innovative co-working spaces and expert real estate
          marketing solutions. With a legacy of delivering quality and
          excellence, we focus on creating sustainable, modern developments that
          cater to diverse needs.
        </p>
        <ul className="space-y-3">
          {["High Speed Internet", "Free Tea & Coffee", "Modern Amenities"].map(
            (amenity, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckSquare className="text-lg" />
                <span className="text-white">{amenity}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default REAbout;
