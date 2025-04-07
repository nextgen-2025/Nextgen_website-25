import React, { useState, useEffect } from "react";
import "../customcss/services.css";

const services = [
  {
    title: "Digital Marketing",
    img: "./services-cards/dg.png",
    description:
      "A cloud-based marketing automation tool helps organizations in developing and managing marketing campaigns, generate leads, and monitor customer engagement.",
  },
  {
    title: "SEO Optimization",
    img: "./services-cards/house_602225.png",
    description:
      "SEO is essential for improving your website's visibility on search engines and driving organic traffic.",
  },
  {
    title: "Content Marketing",
    img: "./services-cards/technical-support_1055683.png",
    description:
      "We create and distribute valuable content to attract and engage your target audience.",
  },
  {
    title: "Social Media",
    img: "./services-cards/technical-support_1055683.png",
    description:
      "Our social media strategies help you connect with your audience and promote your brand.",
  },
];

const ServiceCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = window.innerWidth >= 768 ? 3 : 1;

  // Set interval time (in milliseconds)
  const autoSlideInterval = 4000; // Auto slide every 5 seconds

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get the displayed services based on the current index
  const displayedServices = [];
  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i) % services.length; // Wrap around if necessary
    displayedServices.push(services[index]);
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => {
      clearInterval(interval); // Clear interval when component unmounts
    };
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="md:px-28 bg-white py-10 lg:py-14 relative cards-bg">
      <div className="flex flex-col md:justify-center md:items-center text-[#28aa4a] font-thin md:ml-5">
        <h1 className="text-5xl font-extrabold font-lato">Our Services</h1>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-12 text-[#28aa4a] w-7 h-16 md:w-12 md:h-12 rounded-full shadow-xl bg-white md:bg-transparent hover:bg-slate-50 hover:shadow-2xl z-20"
        >
          &#10094;
        </button>

        <div className="flex justify-center w-full transition-transform duration-300 ease-in-out">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-[350px] my-10 mx-10 md:mx-2 cursor-pointer"
            >
              <div className="group shadow-lg bg-white p-4 md:p-12 rounded-2xl transition-all duration-500 ease-in-out">
                <img src={service.img} alt={service.title} className="w-14" />
                <h1 className="text-start my-4 text-xl md:text-2xl text-[#28aa4a] font-Manrope">
                  {service.title}
                </h1>
                <div className="w-full text-sm md:text-lg text-left font-extralight overflow-hidden h-[6em] line-clamp-6">
                  <p className="line-clamp-6">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-12 text-[#28aa4a] w-7 h-16 md:w-12 md:h-12 rounded-full shadow-xl bg-white md:bg-transparent hover:bg-slate-50 hover:shadow-2xl z-20"
        >
          &#10095;
        </button>
      </div>
      <div className="flex justify-center items-center pb-4 md:pb-0">
        {services.map((_, index) => (
          <div
            key={index}
            className={`dot1 ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <style>{`
        .dot1 {
          height: 10px;
          width: 10px;
          margin: 0 5px;
          background-color: #ddd;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
        }
        .active {
          background-color: #28aa4a;
        }
        .group:hover {
          transition: background-color 500ms ease-in-out, mask 500ms ease-in-out;
        }
        .card:hover {
          background: linear-gradient(
            to right top,
            #91d399,
            #92d59a,
            #92d89c,
            #93da9d,
            #93dd9f,
            #8dda9a,
            #87d696,
            #81d391,
            #74c985,
            #66bf7a,
            #58b66e,
            #49ac63
          );
        }

        @media (max-width: 768px) {
          .card {
            width: 100%; // Full width on mobile
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCards;
