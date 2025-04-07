import React from "react";
// import { Link } from "react-router-dom";

const SpaceCards = () => {
  return (
    <section id="find-your-space" className="py-20">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-heading mb-5">
            Find Your Ideal Workspace
          </h2>
          <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 md:mx-5">
          {/* Card Data */}
          {[
            {
              title: "Dedicated Desk",
              description:
                "Flexible seating options designed for creative freelancers and those looking for a dynamic workspace",
              imgSrc: "./space-cards/c1.jpg",
            },
            {
              title: "Private Cabins",
              description:
                "For those who need privacy, our spacious, fully furnished cabins offer a focused work environment.",
              imgSrc: "./space-cards/c3.jpg",
            },
            {
              title: "Meeting Room",
              description:
                "Perfect for smaller discussions and collaborations, our meeting rooms provide a private, productive space.",
              imgSrc: "./space-cards/c5.jpg",
            },
            {
              title: "Conference Room",
              description:
                "Our conference rooms are fully equipped with high-speed internet, projectors, and other essential tools to ensure your meetings run smoothly.",
              imgSrc: "./space-cards/c2.jpg",
            },
            {
              title: "Training Room",
              description:
                "A specialized room equipped for team training, workshops, or seminars, providing a focused environment for learning and development.",
              imgSrc: "./space-cards/c4.jpg",
            },
            {
              title: "Mini Cabin",
              description:
                "Our Mini Cabins provide a private, cozy workspace perfect for individuals or small teams of up to 2 people, ensuring focused productivity.",
              imgSrc: "./space-cards/c6.jpg",
            },
          ].map((space, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
            >
              <div className="overflow-hidden">
                <img
                  src={space.imgSrc}
                  alt={space.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg">{space.title}</h4>
                  <a href="#quote_form">
                    <span className="bg-blue-600 text-white font-bold py-2 px-4 cursor-pointer hover:bg-blue-500 transition-colors">
                      Get Quote
                    </span>
                  </a>
                </div>
                <p className="h-24 mb-2 text-gray-700 text-start">
                  {space.description}
                </p>
                <ul className="ul-style-2 list-none space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2"></span> High Speed
                    Internet
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2"></span> Free Tea &
                    Coffee
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2"></span> Modern
                    Amenities
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceCards;
