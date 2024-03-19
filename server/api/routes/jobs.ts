import DiceJobs from "../../scrappers/dice-scrapper";
import GithubJobs from "../../scrappers/githubjobs-scrapper";
import StackoverflowJobs from "../../scrappers/stackoverflow-scrapper";
// import LinkedinJobs from '../../scrappers/linkedin-scrapper'
import { createRouter, createApp, sendError } from "h3";

const app = createApp({
  debug: false,
  onError: (error, event) => {
    sendError(event, error);
  },
});

export default defineEventHandler(async (event) => {
  if (event.path.includes("github")) {
    const data = await GithubJobs.scrape();
    // return res.json(data);
    return data;
  }

  if (event.path.includes("stackoverflow")) {
    const data = await StackoverflowJobs.scrape();

    return data;
  }
  // router.get("/jobs/stackoverflow", async function (req, res) {
  //   const data = await StackoverflowJobs.scrape();
  //   return res.json(data);
  // });

  if (event.path.includes("dive")) {
    const data = await DiceJobs.scrape();

    return data;
  }

  // router.get("/jobs/dive", async function (req, res) {
  //   const data = await DiceJobs.scrape();
  //   return res.json(data);
  // });

  if (event.path.includes("all")) {
    const dice = await DiceJobs.scrape();
    const stackoverflow = await StackoverflowJobs.scrape();
    const github = await GithubJobs.scrape();

    return {
      githubJobs: github,
      stackoverflow: stackoverflow,
      dice: dice,
    };
  }

  // router.get("/jobs/all", async function (req, res) {
  //   const dice = await DiceJobs.scrape();
  //   const stackoverflow = await StackoverflowJobs.scrape();
  //   const github = await GithubJobs.scrape();
  //   return res.json({
  //     githubJobs: github,
  //     stackoverflow: stackoverflow,
  //     dice: dice,
  //   });
  // });

  // router.get("/jobs/dispatch", async function (req, res) {
  //   const data = await Slack.dispatchJob();
  //   return res.json(data);
  // });
});

// const router = createRouter();

// app.use(router);
// export default useBase("/api", app);
