import Slack from "../lib/slack";

export default defineEventHandler(async (event) => {
  if (
    event.method === "GET" &&
    (event.path.includes("/api/oauth") || event.path.includes("/api/oauth/"))
  ) {
    const res = await Slack.oAuthResponse(event);

    if (res?.error)
      return {
        message:
          "The JobPoster bot failed to install. Please click on the URL below to try again.",
        url: "https://slack.com/oauth/v2/authorize?client_id=1250072469155.1525140970550&scope=incoming-webhook,channels:join&user_scope=",
      };

    return {
      message:
        "You have successfully installed JobPoster bot. Please click on the URL below to learn more.",
      url: res?.redirect,
    };
  }
});
