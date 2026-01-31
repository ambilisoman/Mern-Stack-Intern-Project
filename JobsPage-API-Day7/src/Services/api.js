// src/services/api.js
export const fetchJobs = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // placeholder API
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.slice(0, 10); // limit to 10 jobs
  } catch (error) {
    throw error;
  }
};
