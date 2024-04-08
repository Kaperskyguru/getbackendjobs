import { addJob, addJobs, getJob, getJobs, dispatchJob } from "./services";

export default defineEventHandler(async (event) => {
  const COL = "jobs";

  try {
    if (
      event.method === "GET" &&
      (event.path.includes("/api/jobs/dispatch") ||
        event.path.includes("/api/jobs/dispatch/"))
    ) {
      console.log("sas");
      return await dispatchJob(event, COL);
    }

    if (
      event.method === "POST" &&
      (event.path.includes("/api/jobs") || event.path.includes("/api/jobs/"))
    ) {
      return addJob(event, COL);
    }

    if (
      event.method === "POST" &&
      (event.path.includes("/api/jobs/batch") ||
        event.path.includes("/api/jobs/batch/"))
    ) {
      return addJobs(event, COL);
    }

    if (
      event.method === "GET" &&
      (event.path.includes("/api/jobs") || event.path.includes("/api/jobs/"))
    ) {
      const query = getQuery(event);
      if (!query?.slug) return getJobs(event, COL);
      return getJob(event, COL);
    }
  } catch (error: any) {
    return { error: error.message };
  }
});
