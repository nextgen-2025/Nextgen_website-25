import React, { useState, useEffect } from "react";

const JobOpening = ({ onApplyClick }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Fetch job openings from backend
    fetch("https://job-opening-backend-production-7112.up.railway.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const handleCardClick = (job) => {
    setSelectedJob(selectedJob?.title === job.title ? null : job);
  };

  return (
    <div className="w-full lg:w-[50%] lg:mx-16">
      <div className="mb-10">
        <h1 className="text-[#28aa4a] font-bold text-3xl font-lato text-start">
          Current Openings
        </h1>
      </div>

      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li
            key={index}
            className="job-preview bg-white border border-green-300 rounded-lg p-6 transition-shadow hover:shadow-lg cursor-pointer"
            onClick={() => handleCardClick(job)}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start">
                <h4 className="job-title text-start lg:text-xl font-semibold font-Manrope">
                  {job.title}
                </h4>
                <h5 className="text-gray-500 font-Manrope">{job.location}</h5>
              </div>
              <a
                href="#form-career"
                className="btn btn-apply py-2 px-2.5 lg:px-8 text-xs lg:text-sm font-extrabold uppercase tracking-wide border-2 border-green-800 text-green-800 rounded-full hover:bg-green-800 hover:text-white transition font-lato"
                onClick={(e) => {
                  e.stopPropagation();
                  onApplyClick(job.title);
                }}
              >
                Apply <i className="fa fa-arrow-right" />
              </a>
            </div>
            {selectedJob?.title === job.title && (
              <div className="mt-4 pt-4 border-t border-green-200 text-left">
                <p className="text-gray-600 font-Manrope mb-4">
                  {job.description}
                </p>
                <ul>
                  {job.descriptionList?.map((desc, idx) => (
                    <li key={idx} className="text-gray-600 font-Manrope mb-2">
                      - {desc}
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <h6 className="font-Manrope text-gray-700 mb-2">
                    <strong>Required Skills:</strong>
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3">
                  <p className="font-Manrope text-gray-700 mb-2">
                    <strong>Salary: </strong>
                    {job.salary}
                  </p>
                  <p className="font-Manrope text-gray-700 mb-2">
                    <strong>Open Positions: </strong> {job.openPositions}{" "}
                  </p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobOpening;
