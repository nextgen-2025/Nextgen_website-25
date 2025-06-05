import React from "react";

const values = [
  { label: "Integrity", icon: "./values-img-t/1.png" },
  { label: "Collaboration", icon: "./values-img-t/2.png" },
  { label: "Innovation", icon: "./values-img-t/3.png" },
  { label: "Diversity", icon: "./values-img-t/4.png" },
  { label: "Excellence", icon: "./values-img-t/5.png" },
  { label: "Sustainability", icon: "./values-img-t/6.png" },
];

const TeamValues = () => {
  return (
    <section className="bg-[#141C2B] bg-fixed text-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl text-[#ffff] font-bold text-center mb-16">
          Our Values & Mission
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl text-teal-400 mb-4">Our Mission</h3>
            <p className="text-gray-200 leading-relaxed">
              We strive to empower our community through innovative solutions
              and collaborative efforts, fostering an environment of creativity
              and growth.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl  text-teal-400 mb-6">Our Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <img
                    src={value.icon}
                    alt={value.label}
                    width="40"
                    height="40"
                    className="shrink-0"
                  />
                  <span className="text-gray-100">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamValues;
