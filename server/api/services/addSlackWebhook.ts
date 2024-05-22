import { add } from "~/server/lib/firestore";

export const addSlackWebhook = async (data: any, col: string) => {
  const docRef = await add(col, data);
  return docRef;
};
