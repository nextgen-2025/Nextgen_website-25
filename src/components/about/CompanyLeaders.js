import React from "react";

const CompanyLeaders = () => {
  return (
    <div className="relative overflow-hidden my-10">
      <div className="absolute left-0 top-0 z-0 h-fit">
        <img
          src="./13783.jpg"
          alt="Background Vector"
          className="w-full h-auto opacity-5"
        />
      </div>
      <div className="flex flex-col lg:mx-20 gap-14">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="relative z-10 mx-4 md:mx-0">
            <img
              src="./team/satyababu.jpg"
              alt="Founder & MD"
              className="rounded-full md:w-[450px] md:h-[420px] border-4 border-[#28aa4a] profile-image"
            />
          </div>
          <div className="lg:w-[60%] text-start md:text-center lg:ml-20 my-5 relative z-10 mx-4 lg:mx-0">
            <h1 className="text-[#28aa4a] font-bold text-[35px] md:text-5xl profile-name font-lato">
              Mr. Satyababu Naidu
            </h1>
            <h2 className="text-[#28aa4a] font-thin text-3xl mb-2 profile-title">
              Founder & Managing Director
            </h2>
            <p className="font-thin text-justify text-lg profile-description text-black">
              Satyababu Naidu is an experienced leader with a degree in
              Electronics & Communication Engineering and an MBA in Marketing &
              International Business. With over 25 years in telecommunications
              and IT/ITeS, he has held key roles at major firms like Tata Group
              and Reliance. In 2018, he founded NEXTGEN INFRATECH SOLUTIONS LLP,
              which rapidly grew to over 200 skilled professionals, focusing on
              innovative and client-centric solutions. Satyababu is also leading
              a significant smart city project in Panvel, which aims to create a
              sustainable community with modern amenities. His expertise in
              strategic planning and marketing drives the company's growth and
              reputation for quality. Satyababu is committed to leveraging
              technology and sustainable practices to meet industry standards,
              overseeing daily operations and ensuring the implementation of the
              company’s vision.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
          <div className="relative z-10 mx-4 md:mx-0">
            <img
              src="./team/vinay-agrawal.jpg"
              alt="Founder & MD"
              className="rounded-full md:w-[450px] md:h-[420px] border-4 border-[#28aa4a] profile-image1"
            />
          </div>
          <div className="lg:w-[60%] text-start lg:text-center lg:mr-20 my-5 mx-4 lg:mx-0">
            <h1 className="text-[#28aa4a] font-bold text-4xl md:text-5xl profile-name1 font-lato">
              Mr. Vinay Agrawal
            </h1>
            <h2 className="text-[#28aa4a] font-thin text-3xl mb-2 profile-title1">
              Executive Director
            </h2>
            <p className="font-thin text-justify text-lg profile-descriptions1 text-black">
              Mr Vinay Agrawal is commerce graduate and has family business of
              construction since last 4 decades. Responsible for overseas
              capital, accounting, equity as well as strategic planning
              functions. Under his leadership, the Vishesh Group has been one of
              the most successful and respected conglomerates in Navi Mumbai for
              many years. With foresight, leadership and deep knowledge of the
              Industry, Mr. Vinay leads light to the Group. He has over two
              decades of experience in the industry and is widely regarded as a
              man of vision and integrity. Mr. Vinay Agrawal has been
              instrumental in driving the company’s growth and he is primarily
              responsible for the administration, sales and marketing functions
              of the group. He is the technical and architectural genius behind
              the Company’s outstanding reputation for quality and innovation.
              Responsible for overseeing the day-to day operational activities
              and implementation of the vision, goals, and strategic plan of the
              company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLeaders;
