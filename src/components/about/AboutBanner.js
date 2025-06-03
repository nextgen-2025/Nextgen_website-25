import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AboutBanner = () => {
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
    <div>
      <div className="aboutus-bnr-cont flex justify-center bg-center bg-fixed relative overflow-hidden w-full h-[60vh] md:h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="text-white flex flex-col justify-center items-center mx-auto mt-10 md:mt-0 max-w-7xl px-4">
          <span className="inline-block text-teal-400 font-semibold text-lg mb-3 tracking-wide">
            ABOUT NEXTGEN INFRATECH
          </span>

          <h1 className="text-5xl md:text-7xl font-bold drop-in text-center leading-tight mb-6">
            Your Partner in
            <span className="text-teal-400"> Innovation</span>
          </h1>
          <p className=" text-xl md:text-2xl text-center text-gray-300 max-w-3xl drop-in-2">
            Transforming businesses through comprehensive IT infrastructure
            solutions and innovative workspace solutions
          </p>
          <Link
            to="/contact"
            className="drop-in-3 bg-teal-500 hover:bg-teal-600 px-10 py-3 mt-8 rounded-lg transition-all duration-300 text-white flex items-center gap-2 font-medium"
          >
            Get Started
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
