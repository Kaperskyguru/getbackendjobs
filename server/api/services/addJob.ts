import { add } from "~/server/lib/firestore";

export const addJob = async (event: any, col: string) => {
  const body = await readBody(event);
  const docRef = await add(col, body);
};
