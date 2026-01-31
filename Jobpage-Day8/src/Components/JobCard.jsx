const JobCard = ({ job }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{job.title}</h3>
      <p>{job.body}</p>
    </div>
  );
};

export default JobCard;
