import React from "react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "SEO",
    description:
      "We utilize on-page and off-page SEO strategies to enhance your website’s visibility and improve search engine rankings, driving organic traffic.",
    icon: "./ITCardsServices/icon1.png",
    image: "./DMCards/1.jpg",
    shape: "./DMCards/itshape.png",
  },
  {
    id: 2,
    title: "PPC",
    description:
      "Our PPC campaigns leverage keyword research and effective ad management to generate immediate traffic and maximize your return on investment.",
    icon: "./ITCardsServices/icon2.png",
    image: "./DMCards/2.jpg",
    shape: "./DMCards/itshape.png",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "We craft targeted strategies to build brand presence on platforms like Facebook, Instagram, and LinkedIn, fostering engagement and community growth.",
    icon: "./ITCardsServices/icon3.png",
    image: "./DMCards/3.jpg",
    shape: "./DMCards/itshape.png",
  },
  {
    id: 4,
    title: "Content Marketing",
    description:
      "Our content marketing focuses on creating compelling blogs, videos, and infographics that attract and retain customers by addressing their needs and interests.",
    icon: "./ITCardsServices/icon4.png",
    image: "./DMCards/4.jpg",
    shape: "./DMCards/itshape.png",
  },
  {
    id: 5,
    title: "Email Marketing",
    description:
      "We track key performance metrics and provide insights to optimize your digital marketing strategies, ensuring continuous improvement and alignment with your goals.",
    icon: "./ITCardsServices/icon5.png",
    image: "./DMCards/5.jpg",
    shape: "./DMCards/itshape.png",
  },
  {
    id: 6,
    title: "Analytics and Reporting",
    description:
      "Analytics and Reporting involve tracking the performance of your digital marketing efforts. By gathering data insights, we help optimize strategies and improve overall effectiveness.",
    icon: "./ITCardsServices/icon6.png",
    image: "./DMCards/6.jpg",
    shape: "./DMCards/itshape.png",
  },
];

const DMSevices = () => {
  return (
    <div className="py-10">
      <div className="pb-10 flex items-center justify-center">
        <div className="">
          <h1 className="text-[#28aa4a] text-4xl font-extrabold font-lato">
            Digital Marketing Services We Offer
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-10 justify-items-center lg:mx-20">
        {servicesData.map((service) => (
          <div className="p-4 " key={service.id}>
            <div className="bg-white rounded-tl-[100px] shadow-lg overflow-hidden relative group">
              <img
                src={service.image}
                alt={service.title}
                className="relative z-40 w-full h-64 object-cover"
              />
              <div className="absolute z-40 p-2 bg-[#28aa4a] top-52 left-2 w-14 h-14 mx-2 transition-transform transform group-hover:rotate-180">
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-full h-full transition-transform transform group-hover:rotate-180"
                />
              </div>
              <div className="p-4 relative">
                <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4">
                  <img
                    src={service.shape}
                    alt="shape"
                    className=" opacity-20"
                  />
                </div>
                <h4 className="text-start text-lg font-semibold cursor-pointer">
                  <Link
                    to={`/digtal-marketing/${service.id}`}
                    className="relative z-50 text-[#28aa4a] font-Manrope"
                  >
                    {service.title}
                  </Link>
                </h4>
                <p className="text-start mt-2 text-gray-600 md:min-h-24">
                  {service.description}
                </p>
                <Link
                  to={`/digtal-marketing/${service.id}`}
                  className="font-Manrope relative z-50 mt-4 flex justify-start cursor-pointer text-[#28aa4a] group-hover:font-bold"
                >
                  Read More
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="ml-1 group-hover:ml-4"
                    fill="#28aa4a"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DMSevices;
