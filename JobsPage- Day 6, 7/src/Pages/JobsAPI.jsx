// Day7 

import React, { useEffect, useState } from "react";
import JobList from "../Components/JobList";
import "../Styles/Jobs.css";

function JobsAPI() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("API failed");
      }

      const data = await response.json();

      const formattedJobs = data.slice(0, 6).map((item) => ({
        id: item.id,
        title: item.title,
        company: "Tech Company",
        experience: "1–3 years",
        salary: "₹5 – 8 LPA",
      }));

      setJobs(formattedJobs);
    } catch (err) {
      setError("Unable to load jobs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="jobs-page">
      <h2>Job Openings (API)</h2>

      {loading && <p className="loader">Loading jobs...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <JobList jobs={jobs} />}
    </div>
  );
}

export default JobsAPI;
