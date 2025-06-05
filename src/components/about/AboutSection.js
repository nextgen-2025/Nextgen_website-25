import React, { useEffect, useState, useRef } from "react";
import "./aboutus.css";
import NIS from "../../assets/about/Nextgen Infratech Solutions.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    team: 0,
    clients: 0
  });

  const statsData = [
    {
      id: "experience",
      target: 10,
      label: "Years Experience",
      ref: useRef(null)
    },
    {
      id: "team",
      target: 35,
      label: "Expert Team",
      ref: useRef(null)
    },
    {
      id: "clients",
      target: 200,
      label: "Happy Clients",
      ref: useRef(null)
    }
  ];

  useEffect(() => {
    statsData.forEach(({ id, target, ref }) => {
      gsap.fromTo(
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
            setCounts(prev => ({
              ...prev,
              [id]: Math.round(gsap.getProperty(ref.current, "innerText"))
            }));
          }
        }
      );
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src={NIS} 
              alt="Nextgen Infratech Solutions" 
              className="w-full rounded-md" 
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-teal-400 font-semibold text-lg mb-3 tracking-wide uppercase">OUR STORY</h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Nextgen Infratech Solutions</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We at Nextgen Infratech Solutions are committed to becoming your first choice when it comes to IT infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {statsData.map(({ id, ref, label }) => (
                <div 
                  key={id}
                  className="bg-gray-700 bg-opacity-50 py-2 rounded-lg border border-gray-600 transform transition-all duration-300 hover:bg-gray-700"
                >
                  <div 
                    ref={ref}
                    className="text-3xl font-bold text-white flex items-center justify-center"
                  >
                    {counts[id]}
                  </div>
                  <p className="text-gray-400 mt-2 text-center">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
