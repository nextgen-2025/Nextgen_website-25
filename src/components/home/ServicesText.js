import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const texts = [
  {
    heading: "Working",
    subheading: "Space",
    paragraph:
      "offers flexible and customizable office space infrastructure for startups and established businesses. With a focus on innovative design, technology integration, and community building, we create productive work environments. Our customer-centric services ensure a hassle free experience, while scalable solutions allow businesses to expand seamlessly as they grow.",
    link: "/coworking",
  },
  {
    heading: "Digital",
    subheading: "Marketing",
    paragraph:
      "Our innovative design solutions offer flexible and customizable office space infrastructure that supports both startups and established businesses. With an emphasis on technology integration and community building, we foster productive work environments that promote growth.",
    link: "/digtal-marketing",
  },
  {
    heading: "IT",
    subheading: "Services",
    paragraph:
      "Our customer-centric services are designed to provide flexible and customizable office space for both startups and established businesses. By focusing on innovative design and community building, we ensure a hassle-free experience that supports growth.",
    link: "/it-services",
  },
  {
    heading: "Real",
    subheading: "Estate",
    paragraph:
      "Our scalable solutions offer flexible and customizable office space infrastructure suitable for startups and established businesses alike. With a commitment to innovative design and community building, we create productive work environments that facilitate seamless growth.  ",
    link: "/real-estate",
  },
];

const ServicesText = () => {
  const [index, setIndex] = useState(0);
  // const [animate, setAnimate] = useState(false);
  // console.log(animate);

  useEffect(() => {
    const interval = setInterval(() => {
      // setAnimate(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        // setAnimate(false);
      }, 850);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (i) => {
    setIndex(i);
  };
  return (
    <div className="abouthome-bg relative lg:h-[450px] bg-center bg-fixed">
      <div className="flex flex-col md:flex-row justify-between items-center h-full bg-black bg-opacity-70 p-4">
        <div className="relative z-20 w-full lg:w-[50%] hero-content text-white flex flex-col items-start justify-start mx-3 lg:mx-20">
          <h1
            className={`text-[40px] md:text-7xl md:my-7 flex font-light font-lato px-2`}
          >
            <span className="text-[#44fa74c4] font-medium pr-2 md:pr-5">
              {texts[index].heading}
            </span>
            {texts[index].subheading}
          </h1>
          <p className="w-full text-xl text-left font-thin px-2 md:py-0 py-3 text-white">
            {texts[index].paragraph}
          </p>
          <button className="cta-button bg-[#24aa4a] px-10 py-2 my-10 mx-auto md:mx-0 font-Manrope">
            <Link to={texts[index].link}>Explore more</Link>
          </button>
        </div>

        <div className="relative z-20 dots-container flex md:flex-col justify-center md:mt-5 lg:mr-20">
          {texts.map((_, i) => (
            <div
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            ></div>
          ))}
        </div>
        <style>{`
          .dots-container {
            display: flex;
            justify-content: center;
            gap: 10px;
          }
          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #ccc;
            cursor: pointer;
            transition: height 0.3s ease, width 0.3s ease;
          }
          .dot.active {
            background-color: #44fa74c4;
            height: 50px;
            border-radius: 20%;
          }
          @media (max-width: 768px) {
            .dot.active {
              height: auto; /* Remove height */
              width: 50px; /* Set width instead */
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ServicesText;
