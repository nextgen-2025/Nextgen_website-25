import React, { useEffect, useState, useRef, useCallback } from "react";
import "./aboutus.css";
import NIS from "../../assets/about/Nextgen Infratech Solutions.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutConut from "./AboutConut";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    team: 0,
    clients: 0,
  });

  const statsData = [
    {
      id: "experience",
      target: 10,
      label: "Years Experience",
      ref: useRef(null),
    },
    {
      id: "team",
      target: 35,
      label: "Expert Team",
      ref: useRef(null),
    },
    {
      id: "clients",
      target: 200,
      label: "Happy Clients",
      ref: useRef(null),
    },
  ];

  // Memoize the animation function
  const animateCount = useCallback(({ id, target, ref }) => {
    const animation = gsap.fromTo(
      ref.current,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          setCounts((prev) => ({
            ...prev,
            [id]: Math.round(gsap.getProperty(ref.current, "innerText")),
          }));
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const cleanupFunctions = statsData.map(animateCount);
    return () => cleanupFunctions.forEach((cleanup) => cleanup());
  }, [animateCount]);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4 lg:px-10 max-w-full">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src={NIS}
              alt="Nextgen Infratech Solutions"
              className="w-full rounded-md"
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
          </div>
          <div className="lg:w-1/2 text-left">
            <h2 className="text-teal-400 font-semibold text-lg mb-3 tracking-wide uppercase">
              OUR STORY
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nextgen Infratech Solutions
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Empowering Businesses with Scalable IT Solutions At Nextgen
              Infratech Solutions, we deliver innovative, reliable, and
              future-ready IT infrastructure tailored to your needs. Backed by
              expert professionals and a client-first approach, we help
              businesses thrive in today’s digital world.
            </p>
            <AboutConut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
