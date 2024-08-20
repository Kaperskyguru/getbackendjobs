import CleverJobs from "../scrappers/cleverjobs";
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
  const myQueue = new Queue("CleverJob", {
    connection,
  });

  myQueue.add("cars", { color: "blue" });

  const worker = new Worker(
    "CleverJob",
    async (job) => {
      return await CleverJobs.scrape();
    },
    { connection }
  );

  const queueEvents = new QueueEvents("CleverJob");

  queueEvents.on("completed", ({ jobId, ...job }) => {
    console.log("done painting", job);
    return job;
  });

  queueEvents.on(
    "failed",
    ({ jobId, failedReason }: { jobId: string; failedReason: string }) => {
      console.error("error painting", failedReason);
    }
  );

  return {
    message: "job scraping",
  };
});
