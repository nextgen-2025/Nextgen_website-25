import React from "react";
import ServicesCard from "../common/ServicesCard";

const servicesData = [
  {
    id: 1,
    title: "Network Services",
    description:"Safeguard your data with our comprehensive network security solutions.",
    icon: "./ITCardsServices/icon1.png",
    image: "./ITCardsServices/1.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 2,
    title: "Server Services",
    description:
      "Leverage cloud computing to enhance your operational efficiency",
    icon: "./ITCardsServices/icon2.png",
    image: "./ITCardsServices/2.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 3,
    title: "Data Management",
    description:
      "Protect your data’s integrity and usability with our expert management services.",
    icon: "./ITCardsServices/icon3.png",
    image: "./ITCardsServices/3.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 4,
    title: "Firewall Services",
    description: "Fortify your network with our advanced firewall solutions",
    icon: "./ITCardsServices/icon4.png",
    image: "./ITCardsServices/4.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 5,
    title: "Web Development",
    description:
      "Enhance your online presence with our tailored web development services.",
    icon: "./ITCardsServices/icon5.png",
    image: "./ITCardsServices/5.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 6,
    title: "24*7 IT Support",
    description:
      "Ensure uninterrupted operations with our round-the-clock IT support.",
    icon: "./ITCardsServices/icon6.png",
    image: "./ITCardsServices/6.webp",
    shape: "./ITCardsServices/itshape.png",
  },
];

const ITServicesCards = () => {
  return (
    <div className="pt-2">
      <div className="pb-5">
        <div className="">
          <h2 className="text-teal-400 text-3xl lg:text-5xl font-semibold">IT Services We Offer</h2>
          <p className="text-teal-400 text-2xl px-4 py-3">Smart Solutions for Smart Businesses</p>
        </div>
      </div>
      <ServicesCard servicesData={servicesData} linkPrefix="it-services" />
    </div>
  );
};

export default ITServicesCards;
