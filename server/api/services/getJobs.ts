import { queryByCollection } from "~/server/lib/firestore";

export const getJobs = async (event: any, col: string) => {
  const docs = await queryByCollection(col);
  return { result: docs };
};
