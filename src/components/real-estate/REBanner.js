import React, { useEffect, useState, useCallback } from "react";
import "./real-estate.css";
import { Link } from "react-router-dom";

const REBanner = () => {
  const slides = [
    {
      image: "./RealEstate/our-project-1.png",
      title: "Real Estate Marketing",
      subtitle: "Maximize Your Property's Potentials",
      tagline:
        "Comprehensive real estate marketing solutions that connect buyers with the perfect opportunities using data-driven strategies.",
      link: "/contact",
    },
    {
      image: "./RealEstate/our-project-2.jpg",
      title: "Construction Excellence",
      subtitle: "Building  your Dream with Precision and Innovation",
      tagline:
        "Delivering world-class residential and commercial spaces with unmatched craftsmanship and sustainability.",
      link: "/contact",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = startX - e.clientX;

    if (distance > 50) {
      handleNext();
      setIsDragging(false);
    } else if (distance < -50) {
      handlePrev();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const distance = startX - e.touches[0].clientX;

    if (distance > 50) {
      handleNext();
      setIsDragging(false);
    } else if (distance < -50) {
      handlePrev();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative overflow-hidden w-full h-[100vh]"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-inner-rm"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-item-rm flex justify-center items-center bg-fixed"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
            }}
          >
            <div className="flex flex-col gap-5 md:m-20">
              <h2 className="text-[#28aa4a] font-extrabold text-lg md:text-xl font-Manrope">
                {slide.title}
              </h2>
              <h3 className="carousel-subtitle text-5xl md:text-7xl text-white font-bold font-Manrope ">
                {slide.subtitle}
              </h3>
              <p className="text-white text-lg md:text-xl font-light font-Manrope tracking-wider">
                {slide.tagline}
              </p>
              <Link
                to={slide.link}
                className="bg-[#28aa4a] text-white font-semibold px-5 py-2 w-40 mx-auto rounded-md"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default REBanner;
