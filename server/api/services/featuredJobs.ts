import { featuredJobs } from "~/server/lib/firestore";

export const getFeaturedJobs = async (event: any, col: string) => {
  const docs = await featuredJobs(col);
  return { result: docs };
};
