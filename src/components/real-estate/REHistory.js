import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

export const REHistory = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter animation
    const counterInterval = setInterval(() => {
      setCount((prev) => (prev < 25 ? prev + 1 : 25));
    }, 110); // Adjust the speed of counting here

    // Animation for moving the text div
    const animationTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    animationTimeline
      .to(".animated-text", { x: 30, duration: 2 })
      .to(".animated-text", { x: -30, duration: 2 });

    return () => {
      clearInterval(counterInterval);
      animationTimeline.kill();
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:m-10 my-10">
      <div className="relative md:w-[60%] flex items-center mx-4 md:mx-0">
        <img
          src="./RealEstate/company-history-img.png"
          alt="history"
          className="relative z-20 w-full h-full rounded-xl"
        />
        <div className="relative z-30 right-52 bg-white p-14 shadow-lg rounded-xl font-bold flex flex-col md:items-center md:justify-center animated-text ">
          <h2 className="text-4xl">{count}+</h2>
          <p className="text-4xl">Years</p>
        </div>
      </div>

      <div className="md:w-[85%] md:ml-20 mx-4 md:mx-0 flex flex-col md:gap-5 py-2">
        <div>
          <h2 className="font-Manrope text-[#28aa4a] font-bold text-start pt-5">
            Our History
          </h2>
          <h1 className="pt-2 font-Manrope font-semibold text-4xl md:text-[65px] leading-[66px] tracking-wide text-start">
            Building Legacies for 25 Years
          </h1>
        </div>
        <p className="text-justify md:w-[94%] text-[17px] text-gray-700 tracking-wide">
          With over 25 years of experience, Vishesh Group has established itself
          as a trusted name in the construction industry. Our portfolio spans a
          wide range of successful projects, including luxury residential
          complexes, commercial hubs, and mixed-use developments. Every project
          we undertake is a testament to our commitment to quality, innovation,
          and sustainability.
        </p>
        <p className="text-justify md:w-[94%] text-[17px] text-gray-700 tracking-wide">
          Throughout the years, we’ve embraced modern construction techniques,
          cutting-edge technologies, and eco-friendly practices, ensuring that
          each project meets the highest standards.
        </p>
      </div>
    </div>
  );
};
