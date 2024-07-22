import { dbJobResolver } from "../helpers";
import { Builder, By } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import { addJobs, addJobsHelper } from "../api/services";
const jobUrl = `https://startup.jobs/?q=backend`;

let page: any;
let browser: any;
let driver: any;
let cardArr = [];
class Startup {
  static async init() {
    try {
      const options = new chrome.Options();
      options.addArguments("--headless");
      options.addArguments("--disable-gpu");
      options.addArguments("--no-sandbox");
      options.addArguments("--lang=en_US");
      options.addArguments("--window-size=1920,1080");
      options.setChromeBinaryPath(
        "/app/.chrome-for-testing/chrome-linux64/chrome"
      );
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

    const elements = await driver.findElements(
      By.css("div.content > div > div > div.grid")
    );

    const jobs: Array<any> = [];

    for (const element of elements) {
      const jobElement = await element.findElement(
        By.css("div > div > a[target='_blank']")
      );
      const jobURL = await jobElement.getAttribute("href");
      const title = await jobElement.getText();
      const logo = await element
        .findElement(By.tagName("img"))
        ?.getAttribute("src");
      const company = await element
        .findElement(By.css(`div > div > a.py-1`))
        .getText();
      const tags = [];
      const tagsElement = await element.findElements(
        By.css("div[data-post-template-target='tags'] > a.tag")
      );
      for (const tag of tagsElement) {
        tags.push(await tag.getText());
      }

      const locations = [];
      const locationsElement = await element.findElements(
        By.css("div[data-post-template-target='location'] > a.link")
      );
      for (const location of locationsElement) {
        locations.push(await location.getText());
      }

      jobs.push({
        title,
        logo,
        locations,
        company,
        tags,
        jobURL,
      });
    }

    return jobs;
  }

  static async scrape() {
    try {
      const jobs = await this.resolve();
      const data = dbJobResolver(jobs);
      await addJobsHelper("jobs", data);

      return {
        message: "Scraped successfully",
        status: 200,
        total_jobs: jobs.length,
        data,
      };
    } catch (err) {
      console.log(err);
    } finally {
      await driver.quit();
    }
  }

  static async getJobs() {
    const jobs = await this.resolve();
    await driver.quit();
    // console.log(jobs)
    const data: any = {};
    data.jobs = jobs;
    data.total_jobs = jobs.length;
    // DB.store(dbJobResolver(jobs));
    return data;
  }
}

export default Startup;
