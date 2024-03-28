import { get } from "~/server/lib/firestore";

export const getJob = async (event: any, col: string) => {
  const query = getQuery(event);
  const doc = await get(query.id as string, col);
  return { result: doc };
};
