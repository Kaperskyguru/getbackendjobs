import { dbJobResolver } from "../helpers";
// import DB from '../../db'
import puppeteer from "puppeteer";
const jobUrl =
  "https://jobs.github.com/positions?utf8=%E2%9C%93&description=backend&location=";

let page: any;
let browser: any;
let cardArr = [];
class GithubJobs {
  static async init() {
    // console.log('Loading Page ...')

    browser = await puppeteer.launch({
      headless: false,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--single-process", // <- this one doesn't works in Windows
        "--disable-gpu",
      ],
    });

    page = await browser.newPage();
    await Promise.race([
      await page.goto(jobUrl, { waitUntil: "networkidle2" }).catch(() => {}),
      await page.waitForSelector(".positionlist").catch(() => {}),
    ]);
  }

  static async resolve() {
    await this.init();
    // console.log('Grabbing List of Job URLS ...')
    const jobURLs = await page.evaluate(() => {
      const cards = document.querySelectorAll(".job");
      cardArr = Array.from(cards);

      const cardLinks: any = [];
      cardArr.map((card) => {
        const cardDate: any = card.querySelector(".when");
        if (
          cardDate.textContent.includes("hours") ||
          cardDate.textContent.includes("hour")
        ) {
          const cardTitle: any = card.querySelector("a:not([class])");
          const cardLocation: any = card.querySelector(".location");
          const cardCompany = card.querySelector(".company");
          const { text } = cardTitle;
          const { host } = cardTitle;
          const { protocol } = cardTitle;
          const pathName = cardTitle.pathname;
          const query = cardTitle.search;
          const titleURL = protocol + "//" + host + pathName + query;
          const company = cardCompany ? cardCompany.textContent : "none";

          cardLinks.push({
            titleText: text,
            titleURLHost: host,
            titleURLPathname: pathName,
            titleURLSearchQuery: query,
            titleURL: titleURL,
            titleDesc: cardLocation.innerHTML,
            titleCompany: company,
            titleDate: cardDate.textContent,
            titleLocation: cardLocation.innerHTML,
            titleLang: "",
          });
        }
      });
      return cardLinks;
    });

    return jobURLs;
  }

  static async scrape() {
    const jobs = await this.resolve();
    await browser.close();
    const data = dbJobResolver(jobs);
    return {
      message: "Scraped successfully",
      status: 200,
      data,
    };
  }

  static async getJobs() {
    const jobs = await this.resolve();
    await browser.close();
    const data: any = {};
    data.jobs = jobs;
    data.total_jobs = jobs.length;
    // DB.store(dbJobResolver(jobs));
    return data;
  }

  // static jobResolver(jobs) {
  //   return jobs.map((job) => {
  //     const resolvedJob = []
  //     resolvedJob.push(
  //       job.titleText,
  //       job.titleDate,
  //       job.titleDesc,
  //       job.titleURLHost,
  //       job.titleURL,
  //       job.titleCompany
  //     )
  //     return resolvedJob
  //   })
  // }
}

export default GithubJobs;
