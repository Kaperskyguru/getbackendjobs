import LinkedinJobs from "../scrappers/linkedin-scrapper";

export default defineEventHandler(async (event) => {
  const data = await LinkedinJobs.scrape();
  return data;
});
