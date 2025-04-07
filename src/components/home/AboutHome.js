import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="w-full bg-white flex pl-4 py-10 md:py-4 lg:py-0 bg-homeaboutdesign"
      id="abouthome"
    >
      <div className="flex flex-col items-start justify-center lg:w-[70%]  md:mx-12">
        <div className="flex flex-col items-start font-thin text-black w-full font-Manrope">
          <h4 className="text-3xl">Welcome to</h4>
          <h1 className="text-[40px] font-thin text-start text-black leading-[50px]">
            <span className="text-[#28aa4a] font-bold pr-2 text-[44px]">
              Nextgen
            </span>
            Infratech Solution LLP
          </h1>
        </div>
        <p className="w-full text-black py-5 font-thin text-justify text-lg pr-3 md:pr-0">
          NEXTGEN INFRATECH SOLUTIONS LLP specializes in providing flexible
          office space infrastructure for startups and established businesses.
          Our offerings include customizable workspaces tailored to evolving
          business needs, modern and efficient designs that promote
          productivity, and state-of-the-art technology for seamless
          connectivity.
          <br className="hidden md:block" /> We foster a vibrant tenant
          community through networking events and workshops, ensuring a
          hassle-free experience with our comprehensive administrative services
          and maintenance. Our scalable solutions grow with your business,
          providing the flexibility you need for success.
        </p>
        <div className="hidden md:hidden lg:block">
          <div className="text-[#28aa4a] flex gap-1 md:text-lg font-normal font-Manrope">
            <Link className="hover:text-[#28aa4bc2]" to="/it-services">
              IT Services
            </Link>{" "}
            <span className="text-black font-thin">|</span>
            <Link className="hover:text-[#28aa4bc2]" to="/digtal-marketing">
              Digital Marketing
            </Link>{" "}
            <span className="text-black font-thin">|</span>
            <Link className="hover:text-[#28aa4bc2]" to="/real-estate">
              Real Estate
            </Link>{" "}
            <span className="text-black font-thin">|</span>
            <Link className="hover:text-[#28aa4bc2]" to="/coworking">
              Co-Working Space
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:hidden lg:block">
        <img
          src="./nxtgn_office.webp"
          alt="Nextgen Office Entry"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default About;
