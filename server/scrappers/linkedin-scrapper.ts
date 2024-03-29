// import { dbJobResolver } from '../../../helpers/helpers'
// import DB from '../../db'
import puppeteer from "puppeteer";
const jobUrl = `https://www.linkedin.com/jobs/search?keywords=%22Back%2BEnd%2BDeveloper%22&location=&geoId=&f_TPR=r86400&position=1&pageNum=0`;

let page: any;
let browser: any;
let cardArr = [];
class LinkedinJobs {
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
      await page
        .goto(jobUrl, { timeout: 60000, waitUntil: "networkidle2" })
        .catch(() => {}),
      await page
        .waitForSelector(".jobs-search__results-list")
        .catch((err: any) => {
          console.log(err);
        }),
    ]);
  }

  static async resolve() {
    await this.init();
    // console.log('Grabbing List of Job URLS ...')
    // try {
    let jobURLs = [];
    jobURLs = await page
      .evaluate(() => {
        const cards = document.querySelectorAll(".job-result-card");
        cardArr = Array.from(cards);
        console.log(cardArr);

        const cardLinks: any = [];
        cardArr.map((card) => {
          // const cardTitle = card.querySelector('.result-card__full-card-link')
          const comp = card.querySelector(".job-result-card__subtitle-link");
          const cardDesc = card.querySelector(".job-result-card__location");
          // const { text } = comp
          const cardDate = card.querySelector(
            ".job-result-card__listdate--new"
          );
          const jobTitle = card.querySelector(".job-result-card__title");
          // const { host } = cardTitle
          // const { protocol } = cardTitle
          // const pathName = cardTitle.pathname
          // const query = cardTitle.search
          // const titleURL = protocol + '//' + host + pathName + query
          const company = comp;

          cardLinks.push({
            titleText: jobTitle,
            //   titleURLHost: host,
            //   titleURLPathname: pathName,
            //   titleURLSearchQuery: query,
            //   titleURL: titleURL,
            titleDesc: cardDesc,
            titleCompany: company,
            titleDate: cardDate,
          });
        });
        return cardLinks;
      })
      .catch((err: any) => {
        console.log(err, "Evaluate");
      });

    // console.log(jobURLs);
    return jobURLs;
  }

  static async scrape() {
    const jobs = await this.resolve();
    await browser.close();
    // DB.store(this.jobResolver(jobs))
    return {
      message: "Scraped successfully",
      status: 200,
    };
  }

  static async getJobs() {
    const jobs = await this.resolve();
    await browser.close();
    // console.log(jobs)
    const data: any = {};
    data.jobs = jobs;
    // data.total_jobs = jobs.length
    // DB.store(.dbJobResolver(jobs))
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

export default LinkedinJobs;

// const puppeteer = require('puppeteer')

// // https://www.dice.com/jobs?q=Full%20Stack%20Developer&countryCode=US&radius=30&radiusUnit=mi&page=10&pageSize=100&filters.postedDate=SEVEN&language=en
// // Scrape jobs with title 'Full Stack Developer' in the US within 30 miles of IP access.
// // Returns paginated results in english.
// // Only returns jobs that were posted 7 days ago or sooner.

// ;(async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()

//   console.log('Loading Page ...')
//   const pageURL =
//     'https://www.dice.com/jobs?q=backend&countryCode=US&radius=30&radiusUnit=mi&page=1&pageSize=20&filters.postedDate=ONE&language=en'
//   await page.goto(pageURL, { waitUntil: 'networkidle2' })
//   await page.waitForSelector('.search-card')

//   console.log('Grabbing List of Job URLS ...')
//   const jobURLs = await page.evaluate(() => {
//     const cards = document.querySelectorAll('.search-card')
//     const cardArr = Array.from(cards)

//     const cardLinks = []

//     cardArr.map((card) => {
//       const cardTitle = card.querySelector('.card-title-link')
//       const cardDesc = card.querySelector('.card-description')
//       const { text } = cardTitle
//       const { host } = cardTitle
//       const pathName = cardTitle.pathname
//       const query = cardTitle.search
//       const titleURL = host + pathName + query

//       //return card
//       cardLinks.push({
//         titleText: text,
//         titleURLHost: host,
//         titleURLPathname: pathName,
//         titleURLSearchQuery: query,
//         titleURL: titleURL,
//         titleDesc: cardDesc.innerHTML,
//       })
//     })
//     return cardLinks
//   })
//   await browser.close()
//   return jobURLs
// })()
