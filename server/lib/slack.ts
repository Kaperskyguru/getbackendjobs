import axios from "axios";
import { getRandomJob, link } from "../helpers";
import { addSlackWebhook as addWebhook, getJobs } from "../api/services";
import { getWebhook, getWebhooks } from "./firestore";

class Slack {
  static async dispatchJob(event: any, col: string) {
    // Get Job and update

    const { result } = await getJobs(event, col);

    if (!result?.length) return;

    const job = getRandomJob(result);

    // Send to Slack
    if (job) {
      const result = await this.sendJobSlack(job);
      return result;
    }
    return {
      message: "Could not retrieve job",
    };
  }

  static async sendJobSlack(job: any) {
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
    // const url = process.env.SLACK_JOB_WEBHOOK;
    // Get all Slack Webhook
    const communities = await getWebhooks();
    return Promise.all(
      communities.map(
        async (community) => await this.postToSlack(community?.webhook!, block)
      )
    );
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

  static async postToSlack(url: string, message: any) {
    try {
      const result = await axios.post(url, JSON.stringify(message));
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async oAuthResponse(req: any) {
    const query = getQuery(req);
    const url = `https://slack.com/api/oauth.v2.access?code=${query.code}&client_id=${process.env.SLACK_CLIENT_ID}&client_secret=${process.env.SLACK_CLIENT_SECRET}`;

    try {
      const res = await axios.get(url);

      if (!res?.data.ok) {
        return { error: true }; // error
      }

      const data = res?.data;
      const webhook = data?.incoming_webhook?.url;
      const redirect = data?.incoming_webhook?.configuration_url;

      await this.addToSlackList(data);

      return { error: false, webhook, redirect };
    } catch (err) {
      console.log(err);
      return { error: true };
    }
  }

  static async addToSlackList(data: any) {
    const body = {
      webhook: data?.incoming_webhook?.url,
      channel: data?.incoming_webhook?.channel,
      community: data?.team?.name,
      team: data?.team?.id,
      configuration_url: data?.incoming_webhook?.configuration_url,
      access_token: data?.access_token,
    };

    const isWebhookFound = await getWebhook(
      {
        channel: body.channel,
        team: body.team,
      },
      "webhooks"
    );

    if (isWebhookFound?.length) {
      return;
    }

    return await addWebhook(body, "webhooks");
  }
}

export default Slack;
