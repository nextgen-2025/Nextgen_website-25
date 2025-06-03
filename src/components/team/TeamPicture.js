import React from "react";

const teamMembers = [
  {
    name: "Justin Jaykumar",
    role: "HR and Admin Manager",
    img: "../team/justin.jpeg",
  },
  {
    name: "Dakshata Kadam",
    role: "Senior HR Executive",
    img: "https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg",
  },
  {
    name: "Munaf Sarguroh",
    role: "IT Head",
    img: "../team/Munaf.jpg",
  },
  {
    name: "Inderdeep Singh",
    role: "Sales Head",
    img: "../team/inderdeep.webp",
  },
  {
    name: "Pramod Gupta",
    role: "IT Executive",
    img: "../team/pramodG.jpg",
  },
  {
    name: "Niraj Rana",
    role: "Project Manager",
    img: "../team/Niraj.jpg",
  },
  {
    name: "Vinay Mishra",
    role: "Digital Marketing Manager",
    img: "../team/vn.jpg",
  },
  {
    name: "Manas Handore",
    role: "Web Developer",
    img: "../team/m.jpeg",
  },
];

const TeamPicture = () => {
  return (
    <section className="bg-[#141C2B] py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block text-teal-400 font-semibold text-lg mb-3 tracking-wide">
          Meet Our Team
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          The People Powering Our Vision
        </h2>
        <p className="text-md md:text-xl text-gray-300 max-w-3xl mx-auto">
          In a world of challenges, we are the solution. A dedicated team committed to your success.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#1F2A3B] rounded-xl shadow-lg p-5 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-teal-500"
            />
            <h3 className="text-white text-xl font-semibold">{member.name}</h3>
            <p className="text-teal-400 font-medium mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPicture;
