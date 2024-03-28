import { batch } from "~/server/lib/firestore";

export const addJobs = async (event: any, col: string) => {
  const body = await readBody(event);
  const docRef = await batch(col, body);
  console.log(docRef);
  return docRef;
};

export const addJobsHelper = async (col: string, data: Array<Object>) => {
  return batch(col, data);
};
