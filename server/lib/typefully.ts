import axios from "axios";
import { getRandomJob, link } from "../helpers";
import { getJobs } from "../api/services";
const URL = "https://api.typefully.com/v1/drafts/";

class Typefully {
  static async sendTweet(event, col) {
    const { result } = await getJobs(event, col);

    if (!result?.length) return;

    const job = getRandomJob(result);
    return this.tweet(job);
  }

  static tweet(job) {
    const data = this.formatJob(job);

    return axios
      .post(URL, data, {
        headers: {
          "X-API-KEY": process.env.TYPEFULLY,
        },
      })
      .then((result) => result.data)
      .catch((error) => {
        console.log(error);
      });
  }

  static formatJob(job) {
    const myDate = new Date();
    myDate.setMinutes(myDate.getMinutes() + 5);

    const data = {
      content: `NEW BACKEND JOB ALERT! \n\n ${job?.company_name} is hiring a ${
        job?.position
      } \n\n Click on the link below to view more information. \n\n ${
        process.env.BASE_URL
      }${link(job, "twitter")}`,
      "schedule-date": myDate.toISOString(),
      auto_retweet_enabled: true,
      threadify: true,
      auto_plug_enabled: true,
    };

    return data;
  }
}

export default Typefully;
