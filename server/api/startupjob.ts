import StartupJobs from "../scrappers/startupjobs";

export default defineEventHandler(async (event) => {
  const data = await StartupJobs.scrape();
  return data;
});
