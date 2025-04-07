import React, { useEffect } from "react";
import "./aboutus.css";
import NIS from "../../assets/about/Nextgen Infratech Solutions.jpg";
// import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  // useEffect(() => {
  //   const description = gsap.fromTo(
  //     ".description",
  //     { x: "-100%", opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: ".description",
  //         start: "top 75%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );

  //   return () => {
  //     description.kill();
  //   };
  // }, []);
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
    <div className="">
      {/* <!--Start About Area--> */}
      <div className="about-area md:my-10">
        <div className="flex flex-row-reverse items-center">
          <div className="about-image-content pr-15 hidden lg:block">
            <img src={NIS} alt="" className="w-full" />
          </div>

          <div className="w-full md:mx-20 lg:w-[70%]">
            <div className="">
              {/* <span className="text-4xl font-semibold">About</span> */}
              <h1 className="text-4xl md:text-5xl font-extrabold my-5 text-[#24aa4a] md:text-start font-lato">
                Nextgen Infratech Solutions
              </h1>
              <p className="font-thin mx-4 md:mx-0 md:text-start text-black text-2xl">
                We at Nextgen Infratech Solutions are committed to becoming your
                first choice when it comes to IT infrastructure.
              </p>
            </div>
            <div className="about-features my-3">
              {/* description */}
              <p className="md:text-start text-justify mx-4 md:mx-0 font-thin my-2 text-xl">
                Nextgen Infratech Solutions LLP was founded in 2018 to provide
                innovative IT infrastructure solutions. With over 20 years of
                combined experience, we help businesses achieve their goals
                confidently. We specialize in flexible office space, offering
                customizable workspaces that adapt to evolving needs. Our
                vibrant tenant community is supported by networking events and
                comprehensive administrative services. Looking ahead, our
                scalable solutions align with our clients' long-term growth
                strategies.
              </p>
            </div>
            {/* description */}
            <div className="flex gap-5 md:gap-28 mx-2 md:mx-0 my-3 md:my-0 ">
              <div className="text-center">
                <div
                  className="text-6xl font-semibold font-lato counter text-[#28aa4a]"
                  data-count="10"
                ></div>
                <p className="text-lg mt-2 font-thin">Years of Experience</p>
              </div>
              <div className="text-center">
                <div
                  className="text-6xl font-semibold font-lato counter text-[#28aa4a]"
                  data-count="35"
                />
                <p className="text-lg mt-2 font-thin">Happy Clients</p>
              </div>
              <div className="text-center">
                <div
                  className="text-6xl font-semibold font-lato counter text-[#28aa4a]"
                  data-count="55"
                />
                <p className="text-lg mt-2 font-thin">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End About Area--> */}
    </div>
  );
};

export default AboutSection;
