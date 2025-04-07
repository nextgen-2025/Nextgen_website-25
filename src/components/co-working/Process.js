import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-around items-start md:items-center md:my-10 mx-4 md:mx-0">
        <h1 className="text-2xl md:text-[50px] md:leading-[60px] font-heading py-2 lg:py-0">
          24/7 Workspaces,
          <br />
          for Every Schedule
        </h1>
        <p className="lg:w-[50%] pb-5 md:pb-0 text-start text-xl font-thin md:px-3">
          No matter when you work, NextGen Infratech is here for you. Our day
          and night process options ensure that your team has access to premium
          office spaces, offering flexibility and productivity at any hour.
        </p>
      </div>
      <div
        id="process"
        className="relative  w-[95%] h-[100vh] mx-auto md:h-screen overflow-hidden"
      >
        <img
          id="shift-image"
          src={images[currentIndex].src}
          alt="shifts"
          className="w-full h-full  object-cover transition-opacity duration-1000"
          style={{ opacity: currentIndex === 0 ? 1 : 1 }}
        />
        <div className="w-full md:w-[60%] absolute bottom-0 left-0 bg-white px-5 py-2 shadow-lg flex justify-between">
          <div className="mb-2">
            <h1 id="shift-title" className="text-2xl font-bold">
              {images[currentIndex].title}
            </h1>
            <h3 className="md:text-lg font-semibold">Office Shifts</h3>
          </div>
          <div className="mb-2">
            <h1 id="shift-count" className="text-2xl font-bold">
              {images[currentIndex].count}
            </h1>
            <h3 className="md:text-lg font-semibold">Seats Available</h3>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("quote_form")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
