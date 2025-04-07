import React, { useState } from "react";

const JobOpening = ({ onApplyClick }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    { 
      title: "Telecaller", 
      location: "Mahape-MBP, Ghansoli",
      description: "We are looking for an enthusiastic Telecaller to contact potential customers and handle client communications. Requirements include excellent communication skills and 1-2 years of experience in telemarketing.",
      skills: ["Communication Skills", "Telesales", "Customer Service", "MS Office", "Hindi & English Proficiency"]
    },
    { 
      title: "HR Executive", 
      location: "Mahape-MBP, Ghansoli",
      description: "Seeking an HR Executive with 2+ years of experience to handle recruitment, employee relations, and HR operations. Must have strong interpersonal skills and knowledge of HR practices.",
      skills: ["Recruitment", "Employee Relations", "HR Policies", "HRIS", "Payroll Management"]
    },
    { 
      title: "Digital Marketing Manager", 
      location: "Mahape-MBP, Ghansoli",
      description: "Looking for a Digital Marketing Manager to lead our online marketing initiatives. Should have 3+ years of experience in SEO, social media marketing, and content strategy.",
      skills: ["SEO", "Social Media Marketing","SMMO", "Content Strategy", "Google Analytics", "PPC Campaigns"]
    },
    { 
      title: "Sales Manager", 
      location: "Mahape-MBP, Ghansoli",
      description: "Experienced Sales Manager needed to lead and grow our sales team. Must have 5+ years of B2B sales experience and proven track record of meeting targets.",
      skills: ["B2B Sales", "Team Leadership", "Sales Strategy", "CRM Software", "Negotiation"]
    },
    { 
      title: "Graphic Designer", 
      location: "Mahape-MBP, Ghansoli",
      description: "Creative Graphic Designer wanted with expertise in Adobe Creative Suite. Should have 2+ years of experience in creating marketing materials and brand assets.",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "UI/UX Design", "Typography", "Brand Design"]
    },
    { 
      title: "IT-Head", 
      location: "Mahape-MBP, Ghansoli",
      description: "Seeking an IT Head to oversee all technology operations. Should have 8+ years of experience in IT management and strong leadership skills.",
      skills: ["IT Strategy", "Team Management", "Project Management", "Cloud Services", "Information Security"]
    },
  ];

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
                <p className="text-gray-600 font-Manrope mb-4">{job.description}</p>
                <div className="mt-3">
                  <h6 className="font-semibold text-gray-700 mb-2">Required Skills:</h6>
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
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobOpening;