import React from "react";

const teamMembers = [
  {
    name: "Justin Jaykumar",
    role: "HR and Admin Manager",
    img: "../team/justin.jpeg",
    socialLinks: {
      facebook: "#asdas",
      instagram: "#asdasd",
      twitter: "#sdas",
    },
  },
  {
    name: "Dakshata Kadam",
    role: "Senior HR Executive",
    img: "https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg",
    socialLinks: {
      facebook: "#sd",
      instagram: "#asd",
      twitter: "#asd",
    },
  },
  {
    name: "Munaf Sarguroh",
    role: "IT Head",
    img: "../team/Munaf.jpg",
    socialLinks: {
      facebook: "#sd",
      instagram: "#asd",
      twitter: "#asd",
    },
  },
  {
    name: "Inderdeep Singh",
    role: "Sales Head",
    img: "../team/inderdeep.webp",
    socialLinks: {
      facebook: "#sds",
      instagram: "#sd",
      twitter: "#ds",
    },
  },
  {
    name: "Pramod Gupta",
    role: "IT",
    img: "../team/pramodG.jpg",
    socialLinks: {
      facebook: "#sds",
      instagram: "#sd",
      twitter: "#ds",
    },
  },
  {
    name: "Niraj Rana",
    role: "Project Manager",
    img: "../team/Niraj.jpg",
    socialLinks: {
      facebook: "#sds",
      instagram: "#sd",
      twitter: "#ds",
    },
  },
  {
    name: "Vinay Mishra",
    role: "Digital Marketing Manager",
    img: "../team/vn.jpg",
    socialLinks: {
      facebook: "#asdas",
      instagram: "#asdasd",
      twitter: "#sdas",
    },
  },
  {
    name: "Manas Handore",
    role: "Web Developer",
    img: "../team/m.jpeg",
    socialLinks: {
      facebook: "#asdas",
      instagram: "#asdasd",
      twitter: "#sdas",
    },
  },
];

const TeamPicture = () => {
  return (
    <div className="team-cont">
      <div className="my-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#28aa4a] font-lato">
          The People Powering Our Vision
        </h1>
        <p className="text-3xl md:text-4xl font-thin text-[#28aa4a] md:mx-32 mt-4 leading-10">
          In a world of challenges, we are the solution. A dedicated team
          committed to your success.
        </p>
      </div>
      <div className="main grid grid-cols-1 lg:grid-cols-3 justify-items-center w-full h-auto mt-10">
        {teamMembers.map((member, index) => (
          <div className="profile-card" key={index}>
            <div className="img">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="caption">
              <h3 className="font-Manrope">{member.name}</h3>
              <p className="font-Manrope">{member.role}</p>
              {/* <div className="social-links">
                <a href={member.socialLinks.facebook}>
                  <i className="fa fa-facebook"></i>
                </a>
                <a href={member.socialLinks.instagram}>
                  <i className="fa fa-instagram"></i>
                </a>
                <a href={member.socialLinks.twitter}>
                  <i className="fa fa-twitter"></i>
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPicture;
