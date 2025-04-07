import React from "react";
import "../customcss/landing.css";
import BannerVedio from "../../assets/Banner-vedio.mp4";
// import BannerVedio from "../../assets/nextgenofficespace.mp4";

const Landing = ({ onVideoLoad }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around md:justify-between items-center h-[100vh]">
      {/* Video Section */}
      <video
        className="absolute z-0 top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="metadata"
        poster="/Banner-vedio-poster.png"
        onLoadedData={onVideoLoad}
      >
        <source src={BannerVedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="background-overlay"></div>

      {/* Main Content */}
      <div className="content">
        <div className="content__container">
          <ul className="content__container__list hidden md:block">
            <li className="content__container__list__item">Work.</li>
            <li className="content__container__list__item">Network.</li>
            <li className="content__container__list__item">Accomplish.</li>
          </ul>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden block absolute z-50">
        <ul className="font-landing-text text-white text-5xl font-extrabold  leading-[70px] text-start tracking-normal uppercase">
          <li className="">Work.</li>
          <li className="">Network.</li>
          <li className="">Accomplish.</li>
        </ul>
      </div>

      {/* Scroll Indicator */}
      <a data-scroll href="#abouthome" className="cursor-pointer">
        <div className="absolute bottom-24 left-[50%]">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </a>
    </div>
  );
};

export default Landing;
