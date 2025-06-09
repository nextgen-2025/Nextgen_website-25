import React, { memo } from "react";

const leaders = [
  {
    name: "Mr. Satyababu Naidu",
    title: "Founder & Managing Director",
    image: "./team/satyababu.jpg",
    reverse: false,
    headingColor: "#ffffff",
    bio: `Mr. Satyababu Naidu is an experienced leader with a degree in Electronics & Communication Engineering and an MBA in Marketing & International Business. With over 25 years in telecommunications and IT/ITeS, he has held key roles at major firms like Tata Group and Reliance. In 2018, he founded NEXTGEN INFRATECH SOLUTIONS LLP, which rapidly grew to over 200 skilled professionals. He also leads a smart city project in Panvel focused on sustainability. His strategic planning and marketing expertise continue to drive the company's growth and reputation.`
  },
  {
    name: "Mr. Vinay Agrawal",
    title: "Executive Director",
    image: "./team/vinay_agrawal.jpg",
    reverse: true,
    headingColor: "#ffffff",
    bio: `Mr. Vinay Agrawal, a commerce graduate, brings decades of leadership from his family's established construction business. He oversees overseas capital, strategic planning, and financial operations. Under his leadership, the Vishesh Group has flourished in Navi Mumbai. With a strong technical and architectural vision, he manages administration, sales, and marketing, ensuring daily operations align with the company's goals and long-term vision.`
  }
];

const LeaderCard = memo(({ leader }) => (
  <div
    className={`flex flex-col ${
      leader.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } items-center gap-16 transition-all duration-500 hover:scale-[1.02]`}
  >
    <div
      className={`flex justify-center ${
        leader.reverse ? "lg:justify-end" : "lg:justify-start"
      }`}
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#0D9488] to-[#0D9488] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative bg-gradient-to-tr from-[#0D9488] to-[#0D9488] p-2 rounded-full shadow-lg">
          <img
            src={leader.image}
            alt={leader.title}
            className="rounded-full w-[220px] h-[220px] md:w-[300px] md:h-[300px] border-4 border-white object-cover shadow-xl transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
    <div
      className={`lg:w-[60%] ${
        leader.reverse ? "text-right" : "text-left"
      } text-white space-y-6`}
    >
      <div className="space-y-3">
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          style={{ color: leader.headingColor }}
        >
          {leader.name}
        </h2>
        <h2 className="text-[#0D9488] text-xl md:text-3xl font-semibold">
          {leader.title}
        </h2>
      </div>
      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0D9488] to-transparent rounded-full"></div>
        <p className="text-base md:text-lg font-light leading-relaxed text-justify tracking-normal text-white/90 pl-4">
          {leader.bio}
        </p>
      </div>
    </div>
  </div>
));

const CompanyLeaders = () => {
  return (
    <section className="relative bg-[#141C2B] py-24 px-4 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./13783.jpg"
          alt="Background Vector"
          className="w-full h-full object-cover opacity-5"
          loading="lazy"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141C2B]/80 to-[#141C2B]/95"></div>
      </div>

      <div className="relative z-10 space-y-32 max-w-7xl mx-auto">
        {leaders.map((leader, index) => (
          <LeaderCard key={index} leader={leader} />
        ))}
      </div>
    </section>
  );
};

export default memo(CompanyLeaders);
