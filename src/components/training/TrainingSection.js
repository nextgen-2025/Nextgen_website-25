import React from "react";
import training from "../../assets/training-nxg.jpg";
import trainingRoom from "../../assets/images/11.jpg";
import dedicatedDesk from "../../assets/images/dedicatedDesk.jpg";
import banner from "../../assets/banner.webp";
import privateCabin from "../../assets/_6_08290-Enhanced-NR (1).jpg";
import fourth from "../../assets/Dedicated Desk 3.jpg";
import fifthimage from "../../assets/Picture2.png";
import sixthimage from "../../assets/images/4.jpg";

import {
  Wifi,
  Fan,
  PlugZap,
  Coffee,
  ParkingCircle,
  ShieldCheck,
} from "lucide-react";
import { Phone, Mail } from "lucide-react";

const TrainingSection = () => {
 
  const features = [
    {
      icon: <Wifi className="w-6 h-6 text-green-500" />,
      label: "High-Speed Wi-Fi",
    },
    {
      icon: <Fan className="w-6 h-6 text-green-500" />,
      label: "Air Conditioning",
    },
    {
      icon: <PlugZap className="w-6 h-6 text-green-500" />,
      label: "Power Backup",
    },
    {
      icon: <Coffee className="w-6 h-6 text-green-500" />,
      label: "Free Beverages",
    },
    {
      icon: <ParkingCircle className="w-6 h-6 text-green-500" />,
      label: "Parking Facility",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      label: "24/7 Security",
    },
  ];

  const workspaces = [
    {
      image: privateCabin,
      title: "Private Cabins", // update with your actual image paths
      description: "Quiet and secure spaces for individuals or small teams.",
    },
    {
      image: dedicatedDesk,
      title: "Co-working Area",
      description:
        "Collaborative open desk environment for freelancers and teams with dedicated desk.",
    },
    {
      image: trainingRoom,
      title: "Training Rooms",
      description:
        "Fully equipped training rooms for efficient learning and team discussions",
    },
    {
      image: banner,
      title: "Private Office",
      description: "A peaceful space to focus and create.",
    },
    {
      image: fourth,
      title: "Meeting Room",
      description: "Collaborate and brainstorm with your team.",
    },
    {
      image: sixthimage,
      title: "Classroom",
      description: "Ideal for workshops and training sessions.",
    },
    {
      image: fifthimage,
      title: "Conference Room",
      description: "Host meetings and presentations in style.",  

    }
  ];

  return (
    <div className="bg-white-50 py-3">
      <div className="container mx-auto px-6 lg:px-20">
       
        <div className="bg-white py-16">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-10">
              Features We Provide
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                >
                  {item.icon}
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 lg:px-20">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">
              Our Training Rooms & Workspaces
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 auto-rows-[300px]">
              {workspaces.map((space, index) => (
                <div
                  key={index}
                  className={`
        relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 
        ${index % 5 === 0 ? "col-span-2 row-span-2" : ""} 
        ${index % 4 === 0 ? "col-span-2" : ""} 
        ${index === 3 ? "col-span-2" : ""}
        ${index % 5 == 0 ? "col-span-2 row-span-1" : ""}
        ${index % 6 == 0 ? "col-span-2 row-span-1" : ""}

        `}
                >
                  {/* Image */}
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Static title at bottom */}
                  <div
                    className="
          absolute bottom-0 w-full
          bg-black/50 text-white text-sm p-2 text-center z-10
          opacity-100 transition-opacity duration-300 ease-in-out
          group-hover:opacity-0
        "
                  >
                    {space.title}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute bottom-0 w-full bg-black/80 text-white p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20">
                    <h4 className="text-lg font-semibold">{space.title}</h4>
                    <p className="text-xs mt-1 text-white">
                      {space.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-green-50 py-16">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8">
              Reach out to us directly for any queries, details, or assistance.
              We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a
                href="mailto:info@example.com"
                className="inline-flex items-center gap-2 border-2 border-green-500 text-green-500 font-semibold py-2 px-6 rounded-full hover:bg-green-500 hover:text-white transition duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSection;
