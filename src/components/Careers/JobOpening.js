import React, { useState, useEffect } from "react";

const JobOpening = ({ onApplyClick }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Fetch job openings from backend
    fetch("https://job-opening-backend-production.up.railway.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  // const jobs = [
  //   {
  //     title: "HR Executive",
  //     location: "Mahape-MBP, Ghansoli",
  //     description:
  //       "We are hiring HR Executives to handle recruitment and HR admin activities. Responsibilities include 80% recruitment (sourcing, screening, and interviewing candidates through job portals) and 20% HR admin activities.",
  //     skills: [
  //       "Good knowledge of job portals",
  //       "Strong communication skills",
  //       "Experience in bulk and lateral hiring",
  //       "Basic understanding of payroll management",
  //       "HR operations is required.",
  //     ],
  //     salary: "₹15,000 - ₹25,000 per month",
  //     openPositions: 4,
  //   },
  //   {
  //     title: "Digital Marketing Manager",
  //     location: "Mahape-MBP, Ghansoli",
  //     descriptionList: ["Plan and execute digital strategies to drive traffic, engagement, and leads for real estate projects", "Manage and optimize paid media campaigns (Google Ads, social media, etc.)", "Lead SEO efforts for better organic rankings", "Oversee social media, content, influencers, and promotions", "Analyze campaign data and refine strategies", "Align digital marketing with sales goals through cross-team collaboration", "Mentor and guide the digital marketing team", "Stay updated on real estate-focused digital trends and tools"],
  //     qualifications:
  //       ["Bachelor’s or Master’s degree in Marketing, Digital Media, or a related field","4+ years of experience in digital marketing, specifically in the real estate industry"],
  //     description:
  //       "Looking for a Digital Marketing Manager (Real Estate & Office Infrastructure) to lead our online marketing initiatives.",
  //     skills: [
  //       "Proficient in Google Analytics, Ads, SEO, SEM, and social media marketing",
  //       "Experienced in digital campaigns for real estate",
  //       "Strong leadership, project management, and communication skills",
  //       "Skilled at multitasking in fast-paced environments",
  //     ],
  //     salary: "Discussed during the interview",
  //     openPositions: "Not specified",
  //   },
  //   // {
  //   //   title: "Graphic Designer",
  //   //   location: "Mahape-MBP, Ghansoli",
  //   //   description:
  //   //     "Creative Graphic Designer wanted with expertise in Adobe Creative Suite. Should have 2+ years of experience in creating marketing materials and brand assets.",
  //   //   skills: [
  //   //     "Adobe Photoshop",
  //   //     "Adobe Illustrator",
  //   //     "UI/UX Design",
  //   //     "Typography",
  //   //     "Brand Design",
  //   //   ],
  //   // },
  //   {
  //     title: "App Developer (Android - Java)",
  //     location: "Mahape-MBP, Ghansoli",
  //     description:
  //       "We are seeking a skilled App Developer with hands-on experience in Android development using Java and strong backend integration knowledge. The ideal candidate should have a solid portfolio of mobile applications and a deep understanding of mobile frameworks and best practices.",
  //       descriptionList: ["Design, develop, and maintain high-quality Android applications using Java", "Integrate mobile apps with backend services and APIs", "Stay updated with the latest trends and best practices in Android development"],
  //     skills: [
  //       "Proficient in Java for Android app development",
  //       "Experience with Android SDK, Android Studio, and Gradle",
  //       "Experience with RESTful APIs, JSON/XML parsing, and backend integration",
  //       "Knowledge of SQLite, Room Database, or other local storage solutions",
  //       "Familiar with Firebase (Authentication, Realtime DB, Push Notifications)",
  //       "Experience with version control systems (Git)",
  //     ],
  //     salary: "Discussed during the interview",
  //     openPositions: "1",
  //   },
  // ];

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
