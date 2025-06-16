import React from "react";
import { Link } from "react-router-dom";
import ServicesCard from "../common/ServicesCard";

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
          <h2 className="text-teal-400 text-4xl font-semibold">
            Digital Marketing Services We Offer
          </h2>
        </div>
      </div>
      <ServicesCard servicesData={servicesData} linkPrefix="digtal-marketing" />
    </div>
  );
};

export default DMSevices;
