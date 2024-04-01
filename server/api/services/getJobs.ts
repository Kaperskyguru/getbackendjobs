import { queryByCollection } from "~/server/lib/firestore";

export const getJobs = async (event: any, col: string) => {
  const query: any = getQuery(event);

  const docs = await queryByCollection(col, query);
  return { result: docs };
};
