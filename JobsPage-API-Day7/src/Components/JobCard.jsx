// src/Components/JobCard.jsx
export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h4>{job.title}</h4>
      <p>{job.body}</p>
    </div>
  );
}
