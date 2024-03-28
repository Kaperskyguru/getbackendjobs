import Startup from "../scrappers/startup.jobs";
import StartupJobs from "../scrappers/startupjobs";

export default defineEventHandler(async (event) => {
  const data = await StartupJobs.scrape();
  return data;
});
