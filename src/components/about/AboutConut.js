import React from "react";

const AboutConut = () => {
  return (
    <div
      className="flex flex-wrap gap-2 mb-10"
      role="group"
      aria-label="Company Highlights"
    >
      {[
        { count: "5k", label: "Workstations" },
        { count: "30", label: "Happy Clients" },
        { count: "8", label: "Years of Experience" },
      ].map((stat, index) => (
        <div
          key={`stat-${index}`}
          className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-md border border-gray-600"
          aria-label={`${stat.count}+ ${stat.label}`}
        >
          <h3 className="text-2xl font-bold text-white">
            {stat.count}
            <span className="text-teal-400">+</span>
          </h3>
          <p className="text-gray-400 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutConut;
