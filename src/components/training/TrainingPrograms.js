import React from 'react';
import {
    FaAngular,
    FaCloud,
    FaNetworkWired,
    FaRobot,
    FaAws,
    FaMicrosoft,
    FaDatabase,
    FaHtml5,
    FaLeaf,
    FaJava,
    FaLinux,
} from "react-icons/fa";
import { SiDotnet, SiKubernetes } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { AiOutlineRobot } from "react-icons/ai";

const trainingPrograms = [
  {
    icon: <SiDotnet className="text-4xl text-blue-600" />,   
    title: ".NET Development",
    description:
      "Build robust, cross-platform applications using the Microsoft .NET framework and C#.",
  },
  {
    icon: <DiJava className="text-4xl text-red-500" />,   
    title: "Java Fundamentals",
    description:
      "Master core Java concepts, OOP principles, and build console-based & GUI applications.",
  },
  {
    icon: <FaNetworkWired className="text-4xl text-green-600" />,   
    title: "IMS Network",
    description:
      "Understand IP Multimedia Subsystem (IMS) architecture, protocols, and real-world deployments.",
  },
  {
    icon: <FaRobot className="text-4xl text-purple-600" />,   
    title: "V&V Automation",
    description:
      "Learn Verification & Validation automation techniques, test-frameworks, and CI/CD integration.",
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
      "Get hands-on with core AWS services—EC2, S3, Lambda, and best practices for cloud architecture.",
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
      "Master front-end and back-end development with hands-on projects using Angular.js.",
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
  {
    icon: <FaMicrosoft className="text-4xl text-blue-700" />,   
    title: "Microsoft Office",
    description:
      "Master the core Microsoft Office suite—Word, Excel, PowerPoint, and Outlook—for professional productivity.",
  },
  {
    icon: <FaDatabase className="text-4xl text-green-800" />,   
    title: "SQL Server",
    description:
      "Design, implement, and optimize relational databases using Microsoft SQL Server and T-SQL.",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-500" />,   
    title: "HTML5 & CSS3",
    description:
      "Build semantic, responsive web pages with modern HTML5 elements and CSS3 styling techniques.",
  },
  {
    icon: <FaLeaf className="text-4xl text-green-500" />,   
    title: "Spring Framework",
    description:
      "Develop enterprise-grade Java applications with Spring Core, Spring Boot, and Spring Data.",
  },
  {
    icon: <FaJava className="text-4xl text-red-600" />,   
    title: "Java Fullstack",
    description:
      "Create end-to-end Java applications—Spring Boot backends and modern front-end frameworks.",
  },
  {
    icon: <FaLinux className="text-4xl text-gray-800" />,   
    title: "Linux Administration",
    description:
      "Gain Linux fundamentals: shell scripting, system configuration, package management, and security.",
  },
];

function TrainingPrograms() {
  return (
    <div className="mt-16 mb-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center py-7">
        Our Training Programs
      </h2>
      <div className="grid gap-y-3 gap-x-1 p-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 justify-center justify-items-center">
        {trainingPrograms.map((p, i) => (
          <div
            key={i}
            className={
              `relative group bg-white/90 rounded-2xl shadow-md overflow-hidden
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
               hover:shadow-xl hover:-translate-y-1`
            }
          >
            {/* top-right diagonal */}
            <div className="absolute _top top-0 right-0 w-1/2 h-full bg-purple-100/50 skew-x-[-20deg] origin-top-right"></div>
            {/* bottom-half overlay */}
            <div className="absolute _bottom bottom-0 left-0 w-full h-1/2 bg-purple-200/60 opacity-80"></div>

            {/* content */}
            <div className="relative z-10 flex flex-col h-full p-8 text-left">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-200">
                {p.icon}
              </div>

              <h4 className="text-2xl font-bold text-black-900 mb-4">
                {p.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainingPrograms;
