import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "./space-cards/night.jpg",
    title: "Night",
    count: "500+",
  },
  {
    src: "./space-cards/night1.jpg",
    title: "Day",
    count: "900+",
  },
];

const Process = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 py-12 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[currentIndex].src}
          alt="shifts"
          className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
          style={{ opacity: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        <div className="flex-1 text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-teal-400 mb-4">
            24/7 Workspaces,<br />
            <span className="text-white">for Every Schedule</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            No matter when you work, NextGen Infratech is here for you. Our day and night process options ensure that your team has access to premium office spaces, offering flexibility and productivity at any hour.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg"
          >
            Book Now
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-white/90 rounded-xl shadow-2xl p-8 w-full max-w-sm flex flex-col items-center">
            <h2 className="text-2xl font-bold text-teal-600 mb-2">{images[currentIndex].title} Shift</h2>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Office Shifts</h3>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-teal-700">{images[currentIndex].count}</span>
              <span className="text-lg font-semibold text-gray-700">Seats Available</span>
            </div>
            <div className="flex gap-2 mt-2">
              {images.map((img, idx) => (
                <button
                  key={img.title}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full border-2 border-teal-400 transition-all duration-300 ${currentIndex === idx ? 'bg-teal-400' : 'bg-white'}`}
                  aria-label={`Show ${img.title} shift`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
