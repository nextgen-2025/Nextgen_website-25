import React, { Suspense } from "react";
import trainingRoom from "../../assets/images/11.jpg";
import dedicatedDesk from "../../assets/images/dedicatedDesk.jpg";
import banner from "../../assets/banner.webp";
import privateCabin from "../../assets/_6_08290-Enhanced-NR (1).jpg";
import fourth from "../../assets/Dedicatedclassrooms.jpeg";
import fifthimage from "../../assets/Picture2.png";
import sixthimage from "../../assets/images/4.jpg";

import {
  Phone,
  Mail,
} from "lucide-react";
import TrainingFeatures from "./TrainingFeatures";

const TrainingSection = () => {

  const workspaces = [
    {
      image: privateCabin,
      title: "Private Cabins",
      description: "Quiet and secure spaces for individuals or small teams.",
    },
    {
      image: dedicatedDesk,
      title: "Co-working Area",
      description:
        "Collaborative open desk environment for freelancers and teams with dedicated desk.",
    },
    {
      image: sixthimage,
      title: "Conference Room",
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
      title: "Dedicated Classroom",
      description: "Perfect for training sessions and workshops.",
    },
    {
      image: trainingRoom,
      title: "Training Rooms",
      description: "Ideal for workshops and training sessions.",
    },
    {
      image: fifthimage,
      title: "Classroom",
      description: "Host meetings and presentations in style.",
    }
  ];

  return (
    <div className="bg-white-50 py-3">
      <div className="container mx-auto px-4 lg:px-8">
        <TrainingFeatures />
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">
              Our Training Rooms & Workspaces
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto justify-items-center">
              {workspaces.map((space, index) => (
                <Suspense key={index} fallback={<div className="h-[300px] bg-gray-100 animate-pulse rounded-xl"></div>}>
                  <div
                    className={`
                      relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300
                      ${index % 5 === 0 ? "col-span-2 row-span-2" : ""}
                      ${index % 4 === 0 ? "col-span-2" : ""}
                      ${index === 3 ? "col-span-2" : ""}
                      ${index % 5 === 0 ? "col-span-2 row-span-1" : ""}
                      ${index % 6 === 0 ? "col-span-2 row-span-1" : ""}
                      w-full h-full
                    `}
                  >
                    <img
                      src={space.image}
                      alt={space.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm p-2 text-center z-10 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                      {space.title}
                    </div>
                    <div className="absolute bottom-0 w-full bg-black/80 text-white p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20">
                      <h4 className="text-lg font-semibold">{space.title}</h4>
                      <p className="text-xs mt-1 text-white">{space.description}</p>
                    </div>
                  </div>
                </Suspense>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-green-50 py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Reach out to us directly for any queries, details, or assistance.
              We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+919930365555" 
                className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300 z-30" 
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "tel:+919930365555";
                }}
              > 
                <Phone className="w-5 h-5" /> 
                Call Us 
              </a>
              <a
                href="mailto:nextgeninfratech@gmail.com"
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
