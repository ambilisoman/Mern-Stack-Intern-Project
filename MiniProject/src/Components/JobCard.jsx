export default function JobCard({ title, company }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>
      <button>Apply</button>
    </div>
  );
}
