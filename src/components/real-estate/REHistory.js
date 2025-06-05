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
    <div className="flex flex-col md:flex-row justify-center items-center md:m-10 my-10 px-10">
      <div className="relative md:w-[60%] flex items-center mx-4 md:mx-0">
        <img
          src="./RealEstate/company-history-img.png"
          alt="history"
          className="relative z-20 w-full h-full rounded-xl"
        />
        <div className="relative z-30 right-52 bg-white p-10 shadow-lg rounded-xl font-bold flex flex-col md:items-center md:justify-center animated-text ">
          <h2 className="text-3xl">{count}+</h2>
          <p className="text-3xl">Years</p>
        </div>
      </div>

      <div className="md:w-[85%] md:ml-20 mx-4 md:mx-0 flex flex-col md:gap-5 py-2">
        <div>
          <h2 className=" text-[#28aa4a] font-bold text-start pt-5">
            Our History
          </h2>
          <h2 className="pt-2  font-semibold text-2xl md:text-[45px] leading-[66px] tracking-wide text-start">
            Building Legacies for 25 Years
          </h2>
        </div>
        <p className="text-justify md:w-[94%] text-[17px] text-gray-700 tracking-wide">
          Vishesh Group is a premier construction and real estate company that
          also provides innovative co-working spaces and landscaping services.
          With over 25 years of dedication to customer service, we have
          developed landmark projects that have transformed the skylines of
          cities for the better. With a legacy of delivering quality and
          excellence, we focus on creating sustainable, modern developments that
          cater to diverse needs.
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
