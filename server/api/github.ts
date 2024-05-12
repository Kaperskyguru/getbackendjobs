import GithubJobs from "../scrappers/githubjobs-scrapper";

export default defineEventHandler(async (event) => {
  if (event.path.includes("github")) {
    const data = await GithubJobs.scrape();
    // return res.json(data);
    return data;
  }
});
