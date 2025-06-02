import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrainingBanner = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const countUp = gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: counter.getAttribute("data-count") + "+",
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => countUp.kill();
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Banner Section */}
      <div className="aboutus-bnr-cont flex justify-center bg-center bg-fixed relative overflow-hidden w-full h-[40vh] md:h-[60vh] rounded-b-[60px] ">
        <div className="text-white flex flex-col justify-center items-center mx-auto mt-10 md:mt-0">
          <h1 className="text-4xl md:text-[60px] font-bold drop-in">
            Training and WorkSpace
          </h1>
          <p className=" mx-2 md:mx-0 text-xl md:text-2xl text-center text-white py-4 drop-in-2">
            Your Partner in Innovative IT Infrastructure Solutions
          </p>
          <Link
            to="/contact"
            className="drop-in-3 btn-abt flex items-center justify-center w-fit bg-[#24aa4a] px-5 py-2 rounded-3xl"
          >
            <span className="hover-text">Be a Part of Team</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="20"
              fill="white"
              className="ml-2"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingBanner;
