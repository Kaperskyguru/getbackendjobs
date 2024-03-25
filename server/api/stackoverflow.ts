import StackoverflowJobs from "../scrappers/stackoverflow-scrapper";

export default defineEventHandler(async (event) => {
  const data = await StackoverflowJobs.scrape();
  return data;
});
