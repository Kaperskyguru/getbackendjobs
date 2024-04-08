import Slack from "~/server/lib/slack";

export const dispatchJob = async (event: any, col: string) => {
  return await Slack.dispatchJob(event, col);
};
