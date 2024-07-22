import { dbJobResolver } from "../helpers";
import { Builder, By } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import { addJobsHelper } from "../api/services";
const jobUrl = `https://www.startupjobs.com/jobs/development/back-end`;

let browser: any;
let driver: any;
class StartupJobs {
  static async init() {
    try {
      const options = new chrome.Options();
      options.addArguments("--headless");
      options.addArguments("--disable-gpu");
      options.addArguments("--no-sandbox");
      options.addArguments("--lang=en_US");
      options.addArguments("--window-size=1920,1080");
      options.addArguments(
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
      );

      driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();
      await driver.get(jobUrl);
    } catch (err) {
      console.log(err);
    }
  }

  static async resolve() {
    await this.init();
    // console.log('Grabbing List of Job URLS ...')
    try {
      const elements = await driver.findElements(By.css("main a.group"));

      const jobs: Array<any> = [];
      for (const element of elements) {
        const jobURL = await element.getAttribute("href");
        const title = await element.findElement(By.tagName("h5")).getText();
        const logo = await element
          .findElement(By.tagName("img"))
          ?.getAttribute("src");
        const company = await element
          .findElement(By.css("h6 > span"))
          .getText();
        const locations = [];
        const locationsElement = await element.findElements(
          By.css("div >div > ul > li")
        );
        for (const location of locationsElement) {
          locations.push(await location.getText());
        }

        jobs.push({
          title,
          logo,
          company,
          locations,
          tags: [],
          jobURL,
        });
      }

      return jobs;
    } catch (error) {
      console.log(error);
    }
  }

  static async scrape() {
    try {
      const jobs = await this.resolve();
      await driver.quit();
      const data = dbJobResolver(jobs);

      await addJobsHelper("jobs", data);

      return {
        message: "Scraped successfully",
        status: 200,
        total_jobs: jobs?.length,
        data,
      };
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  static async getJobs() {
    const jobs = await this.resolve();
    await browser.close();
    // console.log(jobs)
    const data: any = {};
    data.jobs = jobs;
    data.total_jobs = jobs?.length;
    // DB.store(dbJobResolver(jobs));
    return data;
  }
}

export default StartupJobs;
