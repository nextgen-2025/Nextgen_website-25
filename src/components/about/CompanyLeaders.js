import React from "react";


const leaders = [
  {
    name: "Mr. Satyababu Naidu",
    title: "Founder & Managing Director",
    image: "./team/satyababu.jpg",
    reverse: false,
    headingColor: "#ffffff",
    bio: `Mr. Satyababu Naidu is an experienced leader with a degree in Electronics & Communication Engineering and an MBA in Marketing & International Business. With over 25 years in telecommunications and IT/ITeS, he has held key roles at major firms like Tata Group and Reliance. In 2018, he founded NEXTGEN INFRATECH SOLUTIONS LLP, which rapidly grew to over 200 skilled professionals. He also leads a smart city project in Panvel focused on sustainability. His strategic planning and marketing expertise continue to drive the company’s growth and reputation.`
  },
  {
    name: "Mr. Vinay Agrawal",
    title: "Executive Director",
    image: "./team/vinay-agrawal.jpg",
    reverse: true,
    headingColor: "#ffffff",
    bio: `Mr. Vinay Agrawal, a commerce graduate, brings decades of leadership from his family's established construction business. He oversees overseas capital, strategic planning, and financial operations. Under his leadership, the Vishesh Group has flourished in Navi Mumbai. With a strong technical and architectural vision, he manages administration, sales, and marketing, ensuring daily operations align with the company’s goals and long-term vision.`
  }
];

const CompanyLeaders = () => {
  return (
    <section className="relative bg-[#141C2B] py-20 px-4 md:px-12 overflow-hidden">
      {/* Background Image (low opacity vector effect) */}
      <div className="absolute inset-0 z-0">
        <img
          src="./13783.jpg"
          alt="Background Vector"
          className="w-full h-full object-cover opacity-5"
          loading="eager"
        />
      </div>

      <div className="relative z-10 space-y-28 max-w-7xl mx-auto">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              leader.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12`}
          >
            <div
              className={`flex justify-center ${
                leader.reverse ? "lg:justify-end" : "lg:justify-start"
              }`}
            >
              <div className="bg-gradient-to-tr from-[#0D9488] to-[#0D9488] p-2 rounded-full shadow-lg">
                <img
                  src={leader.image}
                  alt={leader.title}
                  className="rounded-full w-[220px] h-[220px] md:w-[300px] md:h-[300px] border-4 border-white object-cover shadow-xl"
                  loading="eager"
                />
              </div>
            </div>
            <div
              className={`lg:w-[60%] ${
                leader.reverse ? "text-right" : "text-left"
              } text-white`}
            >
              <h2
                className="text-3xl md:text-5xl font-extrabold mb-2"
                style={{ color: leader.headingColor }}
              >
                {leader.name}
              </h2>
              <h2 className="text-[#0D9488] text-xl md:text-3xl font-semibold mb-4">
                {leader.title}
              </h2>
              <p className="text-base md:text-lg font-light leading-relaxed text-justify text-white/90">
                {leader.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLeaders;
