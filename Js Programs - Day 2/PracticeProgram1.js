
// Sample job data
const jobs = [
  { title: "Frontend Developer", salary: 60000, experience: 2, applicants: 15 },
  { title: "Backend Developer", salary: 80000, experience: 3, applicants: 20 },
  { title: "UI Designer", salary: 50000, experience: 1, applicants: 10 },
  { title: "Full Stack Developer", salary: 90000, experience: 4, applicants: 25 },
  { title: "DevOps Engineer", salary: 75000, experience: 3, applicants: 12 }
];

console.log("==== ALL JOBS ====");
console.log(jobs);
console.log("\n");


// ==========================================
// Program 1: Filter jobs by salary
// ==========================================
// Filter() to keep only jobs with salary ?=70000
const highPayingJobs = jobs.filter((job) => job.salary >= 70000);

console.log("Jobs with salary >= 70000:");
console.log(highPayingJobs);
console.log("\n");


// ==========================================
// Program 2: Count total applicants
// ==========================================
//Reduce() to add up all applicants
const totalApplicants = jobs.reduce((total, job) => {
  return total + job.applicants;
}, 0);

console.log("Total applicants:", totalApplicants);
console.log("\n");


// ==========================================
// Program 3: Sort jobs by experience
// ==========================================
//sort() to arrange jobs from least to most experience
const sortedByExperience = [...jobs].sort((a, b) => {
  return a.experience - b.experience;
});

console.log("Jobs sorted by experience (low to high):");
sortedByExperience.forEach((job) => {
  console.log(`${job.title} - ${job.experience} years`);
});
console.log("\n");


// ==========================================
// Program 4: Map job titles
// ==========================================
//Map() to extract just the titles
const jobTitles = jobs.map((job) => job.title);

console.log("All job titles:");
console.log(jobTitles);
console.log("\n");


// ==========================================
// Program 5: Calculate total salary budget
// ==========================================
//Reduce() to sum all salaries, also calculates average salary
const totalSalary = jobs.reduce((total, job) => {
  return total + job.salary;
}, 0);

console.log("Total salary budget:", totalSalary);
console.log("Average salary:", totalSalary / jobs.length);
console.log("\n");


// ==========================================
// BONUS: Combine multiple methods!
// ==========================================

// Find average salary of jobs with 3+ years experience
const experiencedJobsSalary = jobs
  .filter((job) => job.experience >= 3)
  .map((job) => job.salary)
  .reduce((total, salary) => total + salary, 0);

const experiencedJobsCount = jobs.filter((job) => job.experience >= 3).length;

console.log("Average salary for 3+ years experience:");
console.log(experiencedJobsSalary / experiencedJobsCount);
