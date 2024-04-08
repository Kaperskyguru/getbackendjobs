import { get } from "~/server/lib/firestore";

export const getJob = async (event: any, col: string) => {
  const query = getQuery(event);

  let id, slug;

  if (query.id) {
    id = query.id;
    slug = undefined;
  } else {
    slug = query.slug;
    id = undefined;
  }

  const doc = await get(
    { id: id as string | undefined, slug: slug as string | undefined },
    col
  );
  return { result: doc };
};
