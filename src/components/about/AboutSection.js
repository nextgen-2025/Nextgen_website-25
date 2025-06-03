import React, { useEffect } from "react";
import "./aboutus.css";
import NIS from "../../assets/about/Nextgen Infratech Solutions.jpg";
// import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  
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
    <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <img src={NIS} alt="Nextgen Infratech Solutions" className="w-full rounded-lg shadow-2xl" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-teal-400 font-semibold text-lg mb-3 tracking-wide">OUR STORY</h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white ">Nextgen Infratech Solutions</h2>
            <p className="text-gray-300 text-lg mb-8">We at Nextgen Infratech Solutions are committed to becoming your first choice when it comes to IT infrastructure.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                <div className="text-4xl font-bold text-white counter" data-count="10">10<span className="text-teal-400">+</span></div>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                <div className="text-4xl font-bold text-white counter" data-count="35">35<span className="text-teal-400">+</span></div>
                <p className="text-gray-400 mt-2">Expert Team</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                <div className="text-4xl font-bold text-white counter" data-count="200">200<span className="text-teal-400">+</span></div>
                <p className="text-gray-400 mt-2">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
