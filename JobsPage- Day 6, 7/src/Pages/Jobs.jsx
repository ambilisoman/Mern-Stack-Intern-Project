import React from "react";
import JobList from "../Components/JobList";
import "../Styles/Jobs.css";

function Jobs() {
  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      experience: "1-3 years",
      salary: "₹6 - 8 LPA"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      experience: "2-4 years",
      salary: "₹8 - 10 LPA"
    },
    {
      id: 3,
      title: "MERN Stack Intern",
      company: "Startup Inc",
      experience: "Fresher",
      salary: "₹15k / month"
    }
  ];

  return (
    <div className="jobs-page">
      <h2>Job Openings</h2>
      <JobList jobs={jobsData} />
    </div>
  );
}

export default Jobs;
