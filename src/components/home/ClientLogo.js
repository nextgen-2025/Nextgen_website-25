import React, { useRef, useEffect, useState } from "react";
import "../customcss/ClientLogo.css";

const ClientLogo = () => {
  const logos = [
    "./Clients/1.png",
    "./Clients/2.png",
    "./Clients/3.png",
    "./Clients/4.png",
    "./Clients/5.png",
    "./Clients/6.png",
    "./Clients/7.png",
    "./Clients/8.png",
    "./Clients/9.png",
  ];
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => prev + 1);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
  };

  const preventSelection = (e) => {
    e.preventDefault();
  };

  return (
    <div className="overflow-hidden h-fit relative bg-white w-full">
      <div>
        <div className="my-5">
          <h1 className="text-[#28aa4a] font-bold text-5xl py-5">Clients</h1>
          <h3 className="text-[#28aa4a] font-bold text-3xl">
            Worked With NextGen Infratech
          </h3>
        </div>
        <div
          className="slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onDragStart={preventSelection}
        >
          <div
            className="slide-track"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-none w-32 mx-2 slide transform transition-transform duration-300 hover:scale-110"
                onDragStart={preventSelection}
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
