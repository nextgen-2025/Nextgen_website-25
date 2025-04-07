import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/cbanner.webp";

const CareerBanner = () => {
  return (
    <div 
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.842), rgba(0, 0, 0, 0.459)), url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundPositionY: 'center 5%',
      }}
      className="flex justify-start items-end relative overflow-hidden w-full h-[40vh] md:h-[50vh] pt-10 md:pt-0 rounded-b-[60px]"
    >
      <div className="flex flex-col md:items-start px-10 mb-8 md:mb-10">
        <div>
          <h1 className="text-[#28aa4a] text-start text-6xl font-extrabold font-lato">
            Careers
          </h1>
        </div>
        <div>
          <nav aria-label="breadcrumb" className="w-max">
            <ol className="flex w-full flex-wrap items-center rounded-md px-1 py-2">
              <li className="flex cursor-pointer items-center text-lg font-thin text-white transition-colors duration-300 hover:text-[#28aa4a]">
                <Link to="/">Home</Link>
                <span className="pointer-events-none mx-2 text-white">/</span>
              </li>
              <li className="flex cursor-pointer items-center text-lg font-thin text-white transition-colors duration-300 hover:text-[#28aa4a]">
                <Link href="/careers">Careers</Link>
                {/* <span className="pointer-events-none mx-2 text-white">&gt;</span> */}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CareerBanner;
