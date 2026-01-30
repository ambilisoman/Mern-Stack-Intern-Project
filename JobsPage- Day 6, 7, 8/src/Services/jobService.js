//API logic

import { API_ENDPOINTS } from "../Constants/apiUrls";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchJobs = async () => {
  const response = await fetch(`${BASE_URL}${API_ENDPOINTS.JOBS}`);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await response.json();

  return data.slice(0, 6).map((item) => ({
    id: item.id,
    title: item.title,
    company: "Tech Company",
    experience: "1–3 years",
    salary: "₹5 – 8 LPA",
  }));
};
