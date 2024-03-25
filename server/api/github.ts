import GithubJobs from "../scrappers/githubjobs-scrapper";

export default defineEventHandler(async (event) => {
  console.log(event);

  if (event.path.includes("github")) {
    const data = await GithubJobs.scrape();
    // return res.json(data);
    return data;
  }
});
