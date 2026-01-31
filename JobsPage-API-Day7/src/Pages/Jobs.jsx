// src/pages/Jobs.jsx
import { useEffect, useState } from 'react';
import { fetchJobs } from '../Services/api';
import Loader from '../Components/Loader';
import Error from '../Components/Error';
import JobCard from '../Components/JobCard';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs function
  const getJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchJobs();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect for initial fetch + auto refresh every 10 seconds
  useEffect(() => {
    getJobs();
    const interval = setInterval(getJobs, 10000); // auto refresh every 10s

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>Job Listings</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
