import { sendTweet } from "./services";

export default defineEventHandler(async (event) => {
  const COL = "jobs";

  if (
    event.method === "GET" &&
    (event.path.includes("/api/tweet") || event.path.includes("/api/tweet/"))
  ) {
    return await sendTweet(event, COL);
  }
});
