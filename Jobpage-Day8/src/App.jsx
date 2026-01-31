import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import JobCard from "./Components/JobCard";
import Loader from "./Components/Loader";
import { fetchJobs } from "./Services/jobService";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const data = await fetchJobs();
        setJobs(data.slice(0, 10)); // only first 10 items for demo
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
        {loading && <Loader />}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
