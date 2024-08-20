import Startup from "../scrappers/startup.jobs";
import IORedis from "ioredis";
import { Queue, QueueEvents, Worker } from "bullmq";

const connection = new IORedis(
  `rediss://default:${process.env.REDIS_PASSWORD}@factual-firefly-60182.upstash.io:6379`,
  {
    maxRetriesPerRequest: null,
  }
);

export default defineEventHandler(async (event) => {
  const myQueue = new Queue("Startup", {
    connection,
  });

  myQueue.add("scraping", {});

  new Worker(
    "Startup",
    async (job) => {
      return await Startup.scrape();
    },
    { connection }
  );

  const queueEvents = new QueueEvents("Startup");

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
});
