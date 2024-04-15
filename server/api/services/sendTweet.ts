import Typefully from "~/server/lib/typefully";

export const sendTweet = async (event, col) => {
  return await Typefully.sendTweet(event, col);
};
