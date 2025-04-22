import React from "react";
import training from "../../assets/training-nxg.jpg";
import trainingRoom from "../../assets/images/11.jpg";
import dedicatedDesk from "../../assets/images/dedicatedDesk.jpg";
import privateCabin from "../../assets/images/4.jpg"
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
      title: "Full Stack Development",
      description:
        "Master front-end and back-end development with hands-on projects using MERN stack.",
    },
    {
      title: "Data Science & AI",
      description:
        "Learn data analytics, machine learning, and AI with Python and real-world case studies.",
    },
    {
      title: "Cloud Computing",
      description:
        "Gain cloud skills with AWS, Azure, and DevOps tools for deploying and managing apps.",
    },
    // Add more programs if needed
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
      name: "Private Cabins",
      image: privateCabin, // update with your actual image paths
      description: "Quiet and secure spaces for individuals or small teams.",
    },
    {
      name: "Co-working Area",
      image: dedicatedDesk,
      description:
        "Collaborative open desk environment for freelancers and teams with dedicated desk.",
    },
    {
      name: "Training Rooms",
      image: trainingRoom,
      description:
        "Fully equipped training rooms for efficient learning and team discussions",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
          {/* Left Column */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Empower Your Skills with Our IT Training Programs
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're a beginner or looking to advance your career, our
              IT training programs will equip you with the knowledge and skills
              to thrive in today's fast-paced digital world.
            </p>
            <div className="space-x-4">
              <a
                href="/training"
                className="inline-block bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
              >
                Explore Courses
              </a>
              <a
                href="/training"
                className="inline-block text-green-500 font-semibold py-2 px-6 rounded-full border-2 border-green-500 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <img
              src={training}
              alt="Training"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
        <div className="mt-16 mb-10">
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Our Training Programs
          </h3>
          <div className="grid gap-10 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300 h-full flex flex-col min-h-[175px]"
              >
                <h4 className="text-xl font-semibold text-green-600 mb-2">
                  {program.title}
                </h4>
                <p className="text-gray-600 text-sm">{program.description}</p>
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
              Our Workspaces
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {workspaces.map((space, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-green-600 mb-1">
                      {space.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{space.description}</p>
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
