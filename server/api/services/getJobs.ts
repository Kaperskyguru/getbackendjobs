import { queryByCollection } from "~/server/lib/firestore";

export const getJobs = async (event: any, col: string, limit: number = 20) => {
  const query: any = getQuery(event);

  const docs = await queryByCollection(col, query, limit);
  return { result: docs };
};
