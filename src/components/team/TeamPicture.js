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
    <section className="relative bg-[#141C2B] py-24 px-4 md:px-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent" />
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <span className="inline-block text-teal-400 font-semibold text-lg mb-3 tracking-wide">
          Meet Our Team
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text  bg-gradient-to-r from-white to-white/80">
          The People Powering Our Vision
        </h2>
        <p className="text-md md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          In a world of challenges, we are the solution. A dedicated team committed to your success.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative bg-[#1F2A3B] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <img
                src={member.img}
                alt={member.name}
                className="relative w-36 h-36 object-cover rounded-full border-4 border-[#1F2A3B] group-hover:border-teal-500/50 transition-colors duration-500"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xl font-semibold group-hover:text-teal-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-teal-400 font-medium text-sm tracking-wide">
                {member.role}
              </p>
            </div>
            {/* Hover Effect Line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-500 group-hover:w-1/2"></div>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full blur-sm"></div>
    </section>
  );
};

export default TeamPicture;
