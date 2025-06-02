import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const texts = [
  {
    heading: "Working",
    subheading: "Space",
    paragraph:
      "Offers flexible and customizable office space infrastructure for startups and established businesses. With a focus on innovative design, technology integration, and community building, we create productive work environments. Our customer-centric services ensure a hassle free experience, while scalable solutions allow businesses to expand seamlessly as they grow.",
    link: "/coworking",
    icon: "🏢", // Building icon for Working Space
  },
  {
    heading: "Digital",
    subheading: "Marketing",
    paragraph:
      "Our innovative design solutions offer flexible and customizable office space infrastructure that supports both startups and established businesses. With an emphasis on technology integration and community building, we foster productive work environments that promote growth.",
    link: "/digtal-marketing",
    icon: "📱", // Mobile icon for Digital Marketing
  },
  {
    heading: "IT",
    subheading: "Services",
    paragraph:
      "Our customer-centric services are designed to provide flexible and customizable office space for both startups and established businesses. By focusing on innovative design and community building, we ensure a hassle-free experience that supports growth.",
    link: "/it-services",
    icon: "💻", // Laptop icon for IT Services
  },
  {
    heading: "Real",
    subheading: "Estate",
    paragraph:
      "Our scalable solutions offer flexible and customizable office space infrastructure suitable for startups and established businesses alike. With a commitment to innovative design and community building, we create productive work environments that facilitate seamless growth.",
    link: "/real-estate",
    icon: "🏠", // House icon for Real Estate
  },
];

const ServicesText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 850);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="relative lg:h-[450px] bg-center bg-fixed bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center h-full bg-black bg-opacity-20 p-4 px-10">
        <div className="relative z-20 w-full lg:w-[50%] hero-content text-white flex flex-col items-start justify-start mx-3 lg:mx-20">
          <h2 className="text-teal-400 font-semibold text-lg tracking-wide px-2">
            OTHER SERVICES
          </h2>
          <h1 className="text-4xl md:text-5xl font-semibold md:my-7 flex px-2">
            <span className="text-teal-400 font-semibold pr-2 md:pr-2">
              {texts[index].heading}
            </span>
            {texts[index].subheading}
          </h1>
          <p className="w-full text-xl text-left px-2 md:py-0 py-3 text-gray-300">
            {texts[index].paragraph}
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 px-10 py-3 my-10 mx-auto md:mx-0 font-medium rounded-lg transition-all duration-300 text-white flex items-center gap-2">
            <Link to={texts[index].link}>Explore more</Link>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>
        <div className="spinning-circle-container hidden md:block mb-8">
          <div className="spinning-circle"></div>
          {texts.map((text, i) => (
            <div
              key={i}
              className={`service-icon ${
                i === 0
                  ? "icon-1"
                  : i === 1
                  ? "icon-2"
                  : i === 2
                  ? "icon-3"
                  : "icon-4"
              } ${index === i ? "active-icon" : ""}`}
              onClick={() => handleDotClick(i)}
            >
              <span>{text.icon}</span>
            </div>
          ))}
        </div>

        <div className="relative z-20 flex flex-col items-center md:mt-5 lg:mr-20">
          <div className="dots-container flex md:flex-col justify-center">
            {texts.map((_, i) => (
              <div
                key={i}
                className={`dot ${index === i ? "active" : ""}`}
                onClick={() => handleDotClick(i)}
              ></div>
            ))}
          </div>
        </div>
        <style>
          {`
          .dots-container {
            display: flex;
            justify-content: center;
            gap: 10px;
          }
          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #4b5563;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .dot.active {
            background-color: #14b8a6;
            height: 50px;
            border-radius: 20%;
          }
          @media (max-width: 768px) {
            .dot.active {
              height: auto;
              width: 50px;
            }
          }
          .spinning-circle-container {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 100px auto;
}

.spinning-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border: 2px solid rgba(20, 184, 166, 0.3);
  border-radius: 50%;
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.7; }
  50% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.7; }
}

.service-icon {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 50px;
  height: 50px;
  background-color: #14b8a6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
  transform: translate(-50%, -50%);
}

.service-icon.active-icon {
  transform: translate(-50%, -50%) scale(1.2);
  box-shadow: 0 0 15px rgba(20, 184, 166, 0.8);
}

/* Circle Orbit Animations */
.icon-1 {
  animation: orbit 6s linear infinite;
  animation-delay: 0s;
}

.icon-2 {
  animation: orbit 6s linear infinite;
  animation-delay: 1.5s;
}

.icon-3 {
  animation: orbit 6s linear infinite;
  animation-delay: 3s;
}

.icon-4 {
  animation: orbit 6s linear infinite;
  animation-delay: 4.5s;
}

@keyframes orbit {
  0% { transform: rotate(0deg) translate(90px) rotate(0deg); }
  100% { transform: rotate(360deg) translate(90px) rotate(-360deg); }
}

          *{
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
          }
          `}
        </style>
      </div>
    </div>
  );
};

export default ServicesText;
