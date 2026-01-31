import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job.id}   // ✅ key prop
          title={job.title}
          company={job.company}
          experience={job.experience}
          salary={job.salary}
        />
      ))}
    </div>
  );
}

export default JobList;
