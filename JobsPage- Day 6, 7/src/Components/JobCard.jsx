import React from "react";

function JobCard({ title, company, experience, salary }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Experience:</strong> {experience}</p>
      <p><strong>Salary:</strong> {salary}</p>

      <button className="apply-btn">
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;
