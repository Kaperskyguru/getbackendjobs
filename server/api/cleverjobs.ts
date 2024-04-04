import CleverJobs from "../scrappers/cleverjobs";

export default defineEventHandler(async (event) => {
  const data = await CleverJobs.scrape();
  return data;
});
