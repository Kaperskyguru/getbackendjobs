import axios from "axios";
// import moment from '@nuxtjs/moment'
import { getRandomJob, link } from "../helpers";
import { getJobs } from "../api/services";

class Slack {
  static async dispatchJob(event: any, col: string) {
    // Get Job and update

    const { result } = await getJobs(event, col);

    if (!result?.length) return;

    const job = getRandomJob(result);

    // Send to Slack
    if (job) {
      const result = await this.sendJobSlack(job);
      // console.log(result)
      if (result === "ok") {
        // Update Job status
        // if (await DB.updateJob(res.jobs)) {
        return {
          message: "updated successfully",
          job: job,
        };
        // }
      }
      return {
        message: "Slack Job failed",
        job,
      };
    }
    return {
      message: "Could not retrieve job",
    };
  }

  // static async dispatchPost() {
  //   // Get Job and update
  //   const res = await DB.getRandomPost();
  //   // Send to Slack
  //   if (res.posts) {
  //     const result = await this.sendPostSlack(res.posts[0]);
  //     if (result === "ok") {
  //       return {
  //         message: "Updated successfully",
  //       };
  //     }
  //     return {
  //       message: "Slack Post failed",
  //     };
  //   }
  //   return {
  //     message: "Could not retrieve post",
  //   };
  // }

  // static sendPostSlack(post) {
  //   // console.log(
  //   //   // new Date(post.modified) < new Date(),
  //   //   moment(post.modified),
  //   //   new Date()
  //   // )

  //   const inputDate = new Date(post.modified);
  //   const today = new Date();
  //   const content =
  //     inputDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)
  //       ? "@here \n\n" + this.stripTags(post)
  //       : this.stripTags(post);

  //   const block = {
  //     blocks: [
  //       {
  //         type: "section",
  //         text: {
  //           type: "mrkdwn",
  //           text: `<${process.env.BASE_URL}/posts/${post.slug} |* ${post.title}*>`,
  //         },
  //       },
  //       {
  //         type: "section",
  //         text: {
  //           type: "mrkdwn",
  //           text: content,
  //         },
  //         accessory: {
  //           type: "image",
  //           image_url: this.image(post),
  //           alt_text: post.title,
  //         },
  //       },
  //       {
  //         type: "actions",
  //         elements: [
  //           {
  //             type: "button",
  //             text: {
  //               type: "plain_text",
  //               text: "Read More",
  //               emoji: true,
  //             },
  //             url: `${process.env.BASE_URL}/posts/${post.slug}`,
  //             style: "danger",
  //             value: "click_me_123",
  //             action_id: "actionId-0",
  //           },
  //         ],
  //       },
  //     ],
  //   };
  //   const url = process.env.SLACK_POST_WEBHOOK;
  //   return this.postToSlack(url, block);
  // }

  static sendJobSlack(job: any) {
    const block = {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `<${process.env.BASE_URL}${link(job, "slack")} |* ${
              job.position
            }*>`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Click on the APPLY button to see more information.",
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "Apply Now",
              emoji: true,
            },
            value: "click_me_123",
            style: "primary",
            url: `${process.env.BASE_URL}${link(job, "slack")}`,
            action_id: "button-action",
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: "*Keywords:*\n" + job.keywords,
            },
            {
              type: "mrkdwn",
              text: "*Locations:*\n" + job.locations,
            },
            {
              type: "mrkdwn",
              text: "*Company:*\n" + job.company_name,
            },
            {
              type: "mrkdwn",
              text: "*Posted:*\n" + job.created_at,
            },
          ],
        },
      ],
    };
    const url = process.env.SLACK_JOB_WEBHOOK;
    return this.postToSlack(url!, block);
  }

  static image(post: any) {
    if (post) {
      if (post.thumbnail_images) {
        if (post.thumbnail_images.full) return post.thumbnail_images.full.url;
        return "/img/default_banner.webp";
      }
    }
    return "/img/default_banner.webp";
  }

  static stripTags(post: any) {
    if (post) {
      return post.excerpt.replace(/(<([^>]+)>)/gi, "");
    }
  }

  static postToSlack(url: string, message: any) {
    return axios
      .post(url, JSON.stringify(message))
      .then((result) => result.data)
      .catch((error) => {
        // console.log(error);
      });
  }
}

// function link(job: any) {
//   if (!job?.slug) return `/jobs/${job?.id}?id=${job?.id}&ref=slack`;
//   return `/jobs/${job?.slug}?ref=slack`;
// }

// function getRandomJob(jobs: Array<any>) {
//   return jobs[Math.floor(Math.random() * jobs?.length)];
// }
export default Slack;
