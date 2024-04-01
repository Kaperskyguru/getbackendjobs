import Startup from "../scrappers/startup.jobs";

export default defineEventHandler(async (event) => {
  const data = await Startup.scrape();
  return data;
});
