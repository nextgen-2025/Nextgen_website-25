import React from "react";
import "./itservices.css";
import { Link } from "react-router-dom";

const ITBanner = ({ onVideoLoad }) => {
  return (
    <div
      onLoadedData={onVideoLoad}
      className="it-banner flex justify-start items-end bg-center bg-fixed relative overflow-hidden w-full h-[40vh] md:h-[60vh] pt-10 md:pt-0 rounded-b-[60px]"
    >
      <div className="flex flex-col md:items-start px-10 mb-8 md:mb-20">
        <div>
          <h1 className="text-[#28aa4a] text-start text-6xl font-extrabold font-lato">
            IT Services
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
                <Link href="/it-services">IT Services</Link>
                {/* <span className="pointer-events-none mx-2 text-white">&gt;</span> */}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ITBanner;
