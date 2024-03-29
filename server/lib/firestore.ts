import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  where,
  doc,
  writeBatch,
  setDoc,
  getDoc,
  query,
  limit,
  or,
  startAt,
  and,
  endAt,
  Timestamp,
} from "firebase/firestore";
import { firestoreDb } from "./firebase";

export const queryByCollection = async (
  col: string,
  filters: {
    search: String;
    locations: Array<String>;
    tags: Array<String>;
    benefits: Array<String>;
  }
) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const locations = Array.isArray(filters?.locations)
    ? [...filters?.locations]
    : filters?.locations
    ? [filters?.locations]
    : [];

  const keywords = Array.isArray(filters?.tags)
    ? [...filters?.tags]
    : filters?.tags
    ? [filters?.tags]
    : [];

  const benefits = Array.isArray(filters?.benefits)
    ? [...filters?.benefits]
    : filters?.benefits
    ? [filters?.benefits]
    : [];

  let jobQuery = colRef;
  if (locations.length) {
    jobQuery = query(
      colRef,
      where("locations", "array-contains-any", locations)
    );
  }

  if (keywords.length) {
    jobQuery = query(colRef, where("keywords", "array-contains-any", keywords));
  }

  if (benefits.length) {
    jobQuery = query(colRef, where("benefits", "array-contains-any", benefits));
  }

  if (filters?.search) {
    jobQuery = query(
      colRef,
      startAt([filters?.search]),
      endAt([filters?.search + "\uf8ff"])
    );
  }

  // const jobQuery = query(
  //   colRef,
  //   and(
  //     where("	blast_to_newsletter", "==", true),
  //     or(
  //       where("locations", "in", locations),
  //       where("keywords", "in", keywords),
  //       where("benefits", "in", benefits)
  //     )
  //   ),
  //   startAt([filters?.search]),
  //   endAt([filters?.search + "\uf8ff"])
  // );

  const snapshot = await getDocs(jobQuery);

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
      created_at: doc.data()?.created_at?.toDate(),
      updated_at: doc.data()?.updated_at?.toDate(),
    };
  });

  return docs;
};

export const get = async (id: string, col: string) => {
  // @ts-ignore
  const docRef = doc(firestoreDb, col, id);
  const snapshot: any = await getDoc(docRef);

  if (!snapshot.exists()) throw new Error("No data found");
  return snapshot.data();
};

export const set = async (col: string, document: Object) => {
  await setDoc(doc(collection(firestoreDb, col)), document, { merge: true });
};

export const add = async (col: string, document: Object) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const docRef = await addDoc(colRef, document);

  return docRef;
};

export const batch = async (col: string, documents: Array<Object>) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  // Create a batch write operation
  const batch = writeBatch(firestoreDb);

  // Loop through the data array and add each document to the batch
  await Promise.all(
    documents.map(async (document: any) => {
      const jobQuery = query(
        collection(firestoreDb, col),
        where("apply_url", "==", document.apply_url),
        limit(1)
      );

      const snapshot = await getDocs(jobQuery);

      const docs = Array.from(snapshot.docs).map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      document.created_at = Timestamp.now();
      document.updated_at = Timestamp.now();

      if (!docs.length) {
        const docRef = doc(collection(firestoreDb, col)); // Create a new document reference with a unique ID
        batch.set(docRef, document); // Add the data to the batch for this document reference
      }
    })
  );

  batch
    .commit()
    .then(() => {
      console.log("Batch write operation completed");
    })
    .catch((error) => {
      console.error("Batch write operation failed: ", error);
    });
};

export const del = async (col: any, id: any) => {
  const docRef = doc(firestoreDb, col, id);
  return await deleteDoc(docRef);
};
