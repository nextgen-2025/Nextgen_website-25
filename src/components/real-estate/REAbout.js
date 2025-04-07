import React from "react";

const REAbout = () => {
  return (
    <div className="re-banner-abt bg-fixed md:h-[100vh] flex items-center px-5 md:px-10 py-5 md:py-0">
      <div className="md:w-[50%] flex flex-col gap-5 py-2 text-white">
        <div>
          <h2 className="font-Manrope text-[#28aa4a] font-bold text-start py-4 md:py-0">
            About Us
          </h2>
          <h1 className="md:pt-2 font-Manrope font-semibold text-4xl md:text-[65px] md:leading-[66px] tracking-wide text-start">
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
        <ul className="relist list-none space-y-2">
          <li className="flex items-center">
            <span className="text-green-500 mr-2"></span> High Speed Internet
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2"></span> Complimentry Tea & Coffee
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2"></span> Modern Amenities
          </li>
        </ul>
      </div>
    </div>
  );
};

export default REAbout;
