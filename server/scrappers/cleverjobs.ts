import { dbJobResolver, filterJobs } from "../helpers";
import { Builder, By } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import { addJobs, addJobsHelper } from "../api/services";
const jobUrl = `https://cleverjobs.net/remote?category_id=1&type_id=all&level_id=all&search=back-end%2Cbackend`;

let page: any;
let browser: any;
let driver: any;
let levels = ["Intern", "Junior", "Middle", "Senior", "Lead"];
class Startup {
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

    const elements = await driver.findElements(
      By.css(
        "main > section > div > div.columns > div.is-paddingless-horizontal-mobile > div.box"
      )
    );

    const jobs: Array<any> = [];

    for (const element of elements) {
      const jobElement = await element.findElement(
        By.css("div.columns > div.column > div.content")
      );
      const jobURL = await jobElement
        .findElement(By.css("a"))
        .getAttribute("href");
      const title = await jobElement.findElement(By.css("h4")).getText();

      const tagsElement = await jobElement.findElements(
        By.css(`div.tags > span.tag`)
      );

      const company = await element
        .findElement(By.css("div.tags > span:nth-child(2)"))
        .getText();

      const tags = [];
      const locations = [];
      for (const tag of tagsElement) {
        const text = await tag.getText();

        if (levels.includes(text)) {
          tags.push(text);
        } else if (text === "More") {
        } else if (text.includes("ago")) {
        } else if (text === company) {
        } else locations.push(text);
      }

      jobs.push({
        title,
        logo: "",
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
      const filtered = filterJobs(data);

      await addJobsHelper("jobs", filtered);

      return {
        message: "Scraped successfully",
        status: 200,
        total_jobs: filtered.length,
        data: filtered,
      };
    } catch (err) {
      console.log(err);
    } finally {
      await driver?.quit();
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
