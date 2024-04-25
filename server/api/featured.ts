import { getFeaturedJobs } from "./services";

export default defineEventHandler(async (event) => {
  const COL = "jobs";

  try {
    if (
      event.method === "GET" &&
      (event.path.includes("/api/featured") ||
        event.path.includes("/api/featured/"))
    ) {
      return await getFeaturedJobs(event, COL);
    }
  } catch (e) {
    console.log(e);
  }
});
