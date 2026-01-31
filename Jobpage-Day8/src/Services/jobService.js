import { JOBS_API_URL } from "../Constants/api";

// Fetch jobs
export const fetchJobs = async () => {
  try {
    const response = await fetch(JOBS_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
