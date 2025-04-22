import React from "react";
import training from "../../assets/training-nxg.jpg";
import trainingRoom from "../../assets/images/11.jpg";
import dedicatedDesk from "../../assets/images/dedicatedDesk.jpg";
import banner from "../../assets/banner.webp"
import privateCabin from "../../assets/_6_08290-Enhanced-NR (1).jpg"
import fourth from "../../assets/Dedicated Desk 3.jpg"

import { FaAngular, FaCloud } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";

import { FaNetworkWired, FaRobot } from "react-icons/fa";
import {
  SiDotnet,
  SiKubernetes,

} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaAws, FaMicrosoft } from "react-icons/fa6";

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

  const trainingPrograms = [
    {
      icon: <SiDotnet className="text-4xl text-blue-600" />,
      title: ".NET Development",
      description:
        "Build robust, cross‑platform applications using the Microsoft .NET framework and C#.",
    },
    {
      icon: <DiJava className="text-4xl text-red-500" />,
      title: "Java Fundamentals",
      description:
        "Master core Java concepts, OOP principles, and build console‑based & GUI applications.",
    },
    {
      icon: <FaNetworkWired className="text-4xl text-green-600" />,
      title: "IMS Network",
      description:
        "Understand IP Multimedia Subsystem (IMS) architecture, protocols, and real‑world deployments.",
    },
    {
      icon: <FaRobot className="text-4xl text-purple-600" />,
      title: "V&V Automation",
      description:
        "Learn Verification & Validation automation techniques, test‑frameworks, and CI/CD integration.",
    },
    {
      icon: <SiKubernetes className="text-4xl text-indigo-500" />,
      title: "Kubernetes",
      description:
        "Deploy, scale, and manage containerized applications using Kubernetes and Helm charts.",
    },
    {
      icon: <FaAws className="text-4xl text-yellow-500" />,
      title: "AWS Fundamentals",
      description:
        "Get hands‑on with core AWS services—EC2, S3, Lambda, and best practices for cloud architecture.",
    },
    {
      icon: <FaMicrosoft className="text-4xl text-teal-600" />,
      title: "Azure Fundamentals",
      description:
        "Explore Azure compute, storage, networking services, and learn how to design cloud solutions.",
    },
  
    {
      icon: <FaAngular className="text-4xl text-red-600" />,
      title: "Angular.js",
      description:
        "Master front-end and back-end development with hands-on projects using Angular.js",
    },
    {
      icon: <AiOutlineRobot className="text-4xl text-blue-600" />,
      title: "Data Science & AI",
      description:
        "Learn data analytics, machine learning, and AI with Python and real-world case studies.",
    },
    {
      icon: <FaCloud className="text-4xl text-indigo-500" />,
      title: "Cloud Computing",
      description:
        "Gain cloud skills with AWS, Azure, and DevOps tools for deploying and managing apps.",
    },
    // …add more programs here
  ];
  

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
      image:banner,
      title: "Private Office",
      description: "A peaceful space to focus and create.",
    },
    {
      image: fourth,
      title: "Meeting Room",
      description: "Collaborate and brainstorm with your team.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
         <div className="mt-16 mb-10">
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Our Training Programs
          </h3>
         <div className="grid gap-5 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
  {trainingPrograms.map((p, i) => (
    <div
      key={i}
      className="
        relative group bg-white/90 rounded-2xl shadow-md overflow-hidden
        transition-all duration-300 py-2 px-2 w-[300px] backdrop-blur-sm border border-purple-100

        /* base overlays */
        [&>._top]:bg-blue-100/50
        [&>._bottom]:bg-blue-200/60

        /* on-hover: darken whole card */
        hover:bg-blue-900/50

        /* on-hover: tweak your overlays darker */
        hover:[&>._top]:bg-blue-600/30
        hover:[&>._bottom]:bg-blue-800/50

        /* subtle lift + shadow */
        hover:shadow-xl hover:-translate-y-1
      "
    >
      {/* top‑right diagonal */}
      <div className="absolute _top top-0 right-0 w-1/2 h-full bg-purple-100/50 skew-x-[-20deg] origin-top-right"></div>
      {/* bottom‑half overlay */}
      <div className="absolute _bottom bottom-0 left-0 w-full h-1/2 bg-purple-200/60 opacity-80"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col h-full p-8 text-left">
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-200">
          {p.icon}
        </div>

        <h4 className="text-2xl font-bold text-black-900 mb-4">
          {p.title}
        </h4>

        <p className="text-black-700 text-base flex-grow leading-relaxed">
          {p.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <button className="
            bg-green-600/90 text-white text-sm font-medium
            px-6 py-3 rounded-full w-full
            hover:bg-green-800 transition-colors duration-200
            hover:shadow-lg
          ">
            Read More →
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
  {workspaces.map((space, index) => (
    <div
      key={index}
      className={`
        relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300
        ${index % 5 === 0 ? "col-span-2 row-span-2" : ""} 
        ${index % 4 === 0 ? "col-span-2" : ""} 
        ${index === 3 ? "col-span-2" : ""}
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
        <p className="text-xs mt-1 text-white">{space.description}</p>
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
