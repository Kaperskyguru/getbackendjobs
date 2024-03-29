import { dbJobResolver } from "../helpers";
// import DB from '../../db'
import puppeteer from "puppeteer";
const jobUrl = `https://www.dice.com/jobs?q=backend&countryCode=US&radius=30&radiusUnit=mi&page=1&pageSize=20&filters.postedDate=ONE&filters.isRemote=true&language=en`;

let page: any;
let browser: any;
let cardArr = [];
class DiveJobs {
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
      await page.waitForSelector(".search-card").catch(() => {}),
    ]);
  }

  static async resolve() {
    await this.init();
    // console.log('Grabbing List of Job URLS ...')
    const jobURLs = await page.evaluate(() => {
      const cards = document.querySelectorAll(".search-card");
      cardArr = Array.from(cards);

      const cardLinks: any = [];
      cardArr.map((card) => {
        const cardTitle: any = card.querySelector(".card-title-link");
        const cardDesc: any = card.querySelector(".card-description");
        const cardCompany: any = card.querySelector(
          'a[data-cy="search-result-company-name"]'
        );
        const cardLocation = card.querySelector("#searchResultLocation");

        const cardDate: any = card.querySelector(".posted-date");
        const { text } = cardTitle;
        const { host } = cardTitle;
        const { protocol } = cardTitle;
        const pathName = cardTitle.pathname;
        const query = cardTitle.search;
        const titleURL = protocol + "//" + host + pathName + query;
        const company = cardCompany.textContent;
        const location = cardLocation ? cardLocation.textContent : "";

        cardLinks.push({
          titleText: text,
          titleURLHost: host,
          titleURLPathname: pathName,
          titleURLSearchQuery: query,
          titleURL: titleURL,
          titleDesc: cardDesc.innerHTML,
          titleCompany: company,
          titleDate: cardDate.textContent,
          titleLocation: location,
          titleLang: "",
        });
      });
      return cardLinks;
    });

    return jobURLs;
  }

  static async scrape() {
    try {
      const jobs = await this.resolve();
      await browser.close();
      const data = dbJobResolver(jobs);
      return {
        message: "Scraped successfully",
        status: 200,
        data,
      };
    } catch (err) {
      console.log(err);
    }
  }

  static async getDiveJobs() {
    const jobs = await this.resolve();
    await browser.close();
    const data: any = {};
    data.jobs = jobs;
    data.total_jobs = jobs.length;
    // DB.store(dbJobResolver(jobs))
    return data;
  }
}

export default DiveJobs;
