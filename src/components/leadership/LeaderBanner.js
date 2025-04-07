import React, { useState } from "react";

const TeamBanner = () => {
  const [visibleParagraphsSatya, setVisibleParagraphsSatya] = useState(1);
  const [visibleParagraphsVinay, setVisibleParagraphsVinay] = useState(1);

  const paragraphsSatya = [
    "Satyababu Naidu is a seasoned professional with over 25 years of experience in telecommunications, IT/ITeS, and real estate. He has worked with leading companies such as Tata Group, Reliance, and Aditya Birla Group, before founding NEXTGEN INFRATECH SOLUTIONS LLP in 2018. Under his leadership, the company has grown into a powerhouse with over 200 professionals, offering innovative solutions and a client-first approach. In addition to his business acumen, Satyababu is spearheading a major smart city project in Panvel, aimed at creating a sustainable, self-sufficient community, and is a strong advocate for green building standards and sustainable development.",
    "Satyababu holds a degree in Electronics & Communication Engineering and an MBA in Marketing & International Business. His leadership is guided by a strategic focus on market analysis, branding, and leveraging digital platforms. His vision extends beyond real estate, as NEXTGEN also provides flexible office spaces, fostering productivity and collaboration. His commitment to excellence is reflected in his success, positioning him as a forward-thinking leader in multiple industries.",
  ];

  const paragraphsVinay = [
    "Vinay Agarwal is a prominent leader in the real estate industry, with a legacy built on trust, integrity, and innovation. He has played a pivotal role in modernizing his family’s business, which has successfully launched high-end residential and commercial properties. Under his leadership, the company has expanded its portfolio to include mixed-use developments, blending traditional values with contemporary design and sustainability. Vinay's approach incorporates cutting-edge technologies and contemporary marketing strategies, setting new industry standards while addressing the evolving needs of urban populations.",
    "Alongside his professional achievements, Vinay emphasizes corporate social responsibility, integrating community-focused initiatives into every project, such as affordable housing and community development. His blend of innovation with legacy has earned him numerous accolades in the real estate sector, establishing him as a visionary leader dedicated to positive social and environmental impact.",
  ];

  const showMoreSatya = () => {
    setVisibleParagraphsSatya((prev) =>
      Math.min(prev + 1, paragraphsSatya.length)
    );
  };

  const showMoreVinay = () => {
    setVisibleParagraphsVinay((prev) =>
      Math.min(prev + 1, paragraphsVinay.length)
    );
  };

  return (
    <div>
      <div
        className="leadership-cnt flex justify-center bg-center bg-fixed relative overflow-hidden w-full h-[40vh] md:h-[60vh] pt-10 md:pt-0 rounded-b-[60px]
    "
      ></div>
      <div className="my-10 md:my-0">
        <div className="flex flex-col justify-center items-center">
          <div className="mx-4 md:mx-0 bg-leaders bg-cover w-full">
            <img
              src="./team/satyababu.jpg"
              alt="Founder & MD"
              className="profile-image h-96 mx-auto"
            />
          </div>
          <div className="text-center my-5 relative z-10 mx-4 md:mx-32">
            <h1 className="text-[#28aa4a] font-bold text-4xl md:text-5xl profile-name font-Manrope">
              Mr. Satyababu Naidu
            </h1>
            <h2 className="text-[#28aa4a] font-thin text-3xl mt-2 mb-5 profile-title font-Manrope">
              Founder & Managing Director
            </h2>
            {paragraphsSatya
              .slice(0, visibleParagraphsSatya)
              .map((para, index) => (
                <p
                  key={index}
                  className="font-thin text-justify text-lg profile-description mb-4 font-Manrope text-gray-800"
                >
                  {para}
                  {index === visibleParagraphsSatya - 1 &&
                    visibleParagraphsSatya < paragraphsSatya.length && (
                      <span
                        onClick={showMoreSatya}
                        className="text-base font-thin text-blue-500 cursor-pointer"
                      >
                        {" "}
                        read more...
                      </span>
                    )}
                </p>
              ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mx-4 md:mx-0 bg-leaders bg-cover w-full">
            <img
              src="./team/vinay-agrawal.jpg"
              alt="Founder & MD"
              className="profile-image h-96 mx-auto"
            />
          </div>
          <div className="text-center my-5 relative z-10 mx-4 md:mx-32">
            <h1 className="text-[#28aa4a] font-bold text-4xl md:text-5xl profile-name font-Manrope">
              Mr. Vinay Agrawal
            </h1>
            <h2 className="text-[#28aa4a] font-thin text-3xl mt-2 mb-5 profile-title font-Manrope">
              Executive Director
            </h2>

            {paragraphsVinay
              .slice(0, visibleParagraphsVinay)
              .map((para, index) => (
                <p
                  key={index}
                  className="font-light text-justify text-lg profile-description mb-4 font-Manrope text-gray-800"
                >
                  {para}
                  {index === visibleParagraphsVinay - 1 &&
                    visibleParagraphsVinay < paragraphsVinay.length && (
                      <span
                        onClick={showMoreVinay}
                        className="text-base font-thin text-blue-500 cursor-pointer"
                      >
                        {" "}
                        read more...
                      </span>
                    )}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
