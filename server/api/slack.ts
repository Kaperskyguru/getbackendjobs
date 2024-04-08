import { dispatchJob } from "./services";

export default defineEventHandler(async (event) => {
  const COL = "jobs";

  if (
    event.method === "GET" &&
    (event.path.includes("/api/slack") || event.path.includes("/api/slack/"))
  ) {
    return await dispatchJob(event, COL);
  }
});
