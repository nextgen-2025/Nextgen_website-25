import React, { Suspense, memo } from "react";
import trainingRoom from "../../assets/images/11.jpg";
import dedicatedDesk from "../../assets/images/dedicatedDesk.jpg";
import banner from "../../assets/banner.webp";
import privateCabin from "../../assets/_6_08290-Enhanced-NR (1).jpg";
import fourth from "../../assets/Dedicatedclassrooms.jpeg";
import fifthimage from "../../assets/Picture2.png";
import sixthimage from "../../assets/images/4.jpg";
import TrainingFeatures from "./TrainingFeatures";

const WorkspaceCard = memo(({ space }) => (
  <div
    className={`
      relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300
      ${space.title === "Private Office" ? "md:col-span-2" : ""}
      ${space.title === "Private Cabins" || space.title === "Private Office" ? "md:row-span-2" : "aspect-[4/3]"}
      w-full bg-gray-900
    `}
  >
    <img
      src={space.image}
      alt={space.title}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    <div className="absolute bottom-0 w-full p-4 text-white z-10">
      <h4 className="text-lg font-semibold">{space.title}</h4>
    </div>
    <div className="absolute inset-0 bg-black/90 text-white p-6 flex flex-col justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
      <h4 className="text-xl font-semibold mb-2">{space.title}</h4>
      <p className="text-sm text-gray-300">{space.description}</p>
    </div>
  </div>
));

const CardSkeleton = memo(() => (
  <div className="w-full aspect-[4/3] bg-gray-800 animate-pulse rounded-xl" />
));

const TrainingSection = () => {
  const workspaces = [
    {
      image: privateCabin,
      title: "Private Cabins",
      description: "Quiet and secure spaces for individuals or small teams.",
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
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4 lg:px-10 max-w-full">
        <div className="space-y-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-12">
              Our Training Rooms & Workspaces
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
              {workspaces.slice(0, 5).map((space, index) => (
                <Suspense key={index} fallback={<CardSkeleton />}>
                  <WorkspaceCard space={space} />
                </Suspense>
              ))}
            </div>
          </div>
          <TrainingFeatures />
        </div>
      </div>
    </section>
  );
};

export default memo(TrainingSection);
