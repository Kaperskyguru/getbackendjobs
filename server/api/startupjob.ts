import StartupJobs from "../scrappers/startupjobs";
import IORedis from "ioredis";
import { Queue, QueueEvents, Worker } from "bullmq";

const connection = new IORedis(
  process.env.NODE_ENV === "development"
    ? "redis://127.0.0.1:6379"
    : `rediss://default:${process.env.REDIS_PASSWORD}@factual-firefly-60182.upstash.io:6379`,
  {
    maxRetriesPerRequest: null,
  }
);

export default defineEventHandler(async (event) => {
  const myQueue = new Queue("StartupJobs", {
    connection,
  });

  myQueue.add("scraping", {});

  const worker = new Worker(
    "StartupJobs",
    async (job) => {
      return await StartupJobs.scrape();
    },
    { connection }
  );

  const queueEvents = new QueueEvents("StartupJobs");

  queueEvents.on("completed", ({ jobId, ...job }) => {
    console.log("done scraping", job);
    return job;
  });

  queueEvents.on(
    "failed",
    ({ jobId, failedReason }: { jobId: string; failedReason: string }) => {
      console.error("error scraping", failedReason);
    }
  );

  return {
    message: "job scraping",
  };
});
