import { getJobs } from "../api/services";
import { link } from "../helpers";

export default defineSitemapEventHandler(async (event) => {
  const jobRes = await getJobs(event, "jobs", 0);
  const jobs = jobRes?.result ?? [];

  return jobs.map((job) => {
    return {
      loc: `${process.env.BASE_URL}${link(job, "sitemap", false)}`,
      lastmod: job?.updated_at,
    };
  });
});
