import RSS from "rss";
import { link } from "../helpers";
import { getJobs } from "../api/services";
export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: "Get Backend Jobs",
    site_url: "https://getbackendjobs.com?ref=feeds",
    feed_url: `https://getbackendjobs.com/feeds.xml`,
  });

  const jobRes = await getJobs(event, "jobs");

  const jobs = jobRes?.result ?? [];

  for (const job of jobs) {
    feed.item({
      title: job?.position ?? "-",
      url: `${process.env.BASE_URL}${link(job, "feeds")}`,
      date: job.created_at,
      author: job.company_name,
      description: job.description,
      categories: job.keywords,
      custom_elements: job.locations,
    });
  }

  const feedString = feed.xml({ indent: true });
  event.node.res.setHeader("content-type", "text/xml");
  event.node.res.end(feedString);
});
