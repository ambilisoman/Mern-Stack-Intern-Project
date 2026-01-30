import { useEffect, useState } from "react";
import { fetchJobs } from "../Services/jobService";
import JobCard from "../Components/JobCard";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(data => setJobs(data.slice(0, 10)));
  }, []);

  return (
    <div className="jobs">
      <h2>Available Jobs</h2>
      <div className="job-list">
        {jobs.map(job => (
          <JobCard
            key={job.id}
            title={job.title}
            company="Tech Company"
          />
        ))}
      </div>
    </div>
  );
}
