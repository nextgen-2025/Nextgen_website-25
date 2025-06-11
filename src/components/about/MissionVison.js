import React, { memo } from "react";

export const InfoCard = memo(({ title, heading, description }) => (
  <div className="bg-gray-800 bg-opacity-60 p-8 rounded-xl border border-gray-700 shadow-md">
    <h2 className="text-teal-400 text-md font-medium mb-2 uppercase tracking-widest">
      {title}
    </h2>
    <h3 className="text-white text-3xl font-semibold mb-4">
      {heading}
    </h3>
    <p className="text-gray-300 text-lg">
      {description}
    </p>
  </div>
));

const MissionVision = () => {
  const cardData = [
    {
      title: "Our Mission",
      heading: "Empowering Business Growth",
      description:
        "To empower businesses with innovative and reliable technology solutions that drive efficiency, enhance productivity, and foster growth. We are committed to delivering exceptional service and support, ensuring our clients can navigate the digital landscape with confidence.",
    },
    {
      title: "Our Vision",
      heading: "Leading the Future",
      description:
        "To be a leading provider of cutting-edge IT solutions, recognized for our commitment to quality, innovation, and customer satisfaction. We aspire to transform industries through technology, making advanced solutions accessible to businesses of all sizes while promoting a culture of continuous improvement and sustainability.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 overflow-hidden">
      <div className="absolute top-[25%] lg:top-2 left-0 right-0 flex justify-center opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="537.92521"
          height="486.18104"
          fill="#28aa4b27"
          viewBox="0 0 537.92521 486.18104"
          aria-hidden="true"
          className="pointer-events-none"
        >
          <path
            id="shape01"
            d="M552.37662,231.59052c48.68823,125.062-132.79481,278-267,278s-219-138-243-243c-29.90425-130.83107,120.78912-248.43159,243-243C420.37662,29.59052,501.37662,100.59052,552.37662,231.59052Z"
            transform="translate(-30.53739 -23.40948)"
          />
          <path
            id="shape02"
            d="M552.35131,310.489C539.08212,404.77015,378.78216,510.93831,236.8287,507.303,31.11714,502.03486,37.55211,321.122,50.35131,208.489c5-44,10.57757-112.37032,62-149,73-52,131.00984-32.69681,201.17323-16.90935C420.08484,66.55682,571.35131,175.489,552.35131,310.489Z"
            transform="translate(-30.53739 -23.40948)"
          />
          <path
            id="shape03"
            d="M548.908,282.6548c-7.60261,76.60291-69.0762,106.84063-129.3644,152.82754-51.94615,39.62371-114.07765,68.164-179.77888,66.48145-88.39169-2.26365-133.47739-56.814-163.47739-99.814-45.15578-64.72328-26.86551-139.52924-4-200C98.546,132.70542,113.74821,77.43278,168.31351,51.57032c44.06935-20.88766,94.82331-26.32821,148.14706-14.32984,39.60519,8.91157,89.84207,28.85416,134.37751,56.435C526.12809,140.30265,558.28734,188.14983,548.908,282.6548Z"
            transform="translate(-30.53739 -23.40948)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl z-10 relative">
        <div className="grid md:grid-cols-2 gap-12">
          {cardData.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(MissionVision);
