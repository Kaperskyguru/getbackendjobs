import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  where,
  doc,
  writeBatch,
  setDoc,
  query,
  limit,
  startAt,
  endAt,
  Timestamp,
  orderBy,
  documentId,
} from "firebase/firestore";
import { firestoreDb } from "./firebase";

export const queryByCollection = async (
  col: string,
  filters: {
    search: String;
    locations: String;
    keywords: String;
    benefits: String;
    sortBy: String;
  }
) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const locations = filters?.locations
    ? [...filters?.locations?.split(";")]
    : [];

  const keywords = filters?.keywords ? [...filters?.keywords?.split(";")] : [];

  const benefits = filters?.benefits ? [...filters?.benefits?.split(";")] : [];

  const queryConstraints = [];
  let sortBy = orderBy("created_at", "desc");

  let jobSearchQuery: any = null;
  if (locations.length) {
    queryConstraints.push(where("locations", "array-contains-any", locations));
  }

  if (keywords.length) {
    queryConstraints.push(where("keywords", "array-contains-any", keywords));
  }

  if (benefits.length) {
    queryConstraints.push(where("benefits", "array-contains-any", benefits));
  }

  if (filters?.sortBy?.includes("latest")) {
    sortBy = orderBy("created_at", "desc");
  }

  if (filters?.sortBy?.includes("highest")) {
    sortBy = orderBy("max_salary", "desc");
  }

  if (filters?.sortBy?.includes("viewed")) {
    sortBy = orderBy("total_views", "desc");
  }

  if (filters?.sortBy?.includes("applied")) {
    sortBy = orderBy("total_click", "desc");
  }

  // Calculate and store "hottest" by total views * total clicks / 100
  // if (filters?.sortBy?.includes("hottest")) {
  //   sortBy = orderBy("max_salary", "desc");
  // }

  if (filters?.sortBy?.includes("benefits")) {
    sortBy = orderBy("benefits", "desc");
  }

  if (filters?.search) {
    jobSearchQuery = query(
      colRef,
      orderBy("position"),
      startAt(filters?.search),
      endAt(filters?.search + "\uf8ff")
      // ...queryConstraints
    );
  }

  const snapshot = await getDocs(
    filters?.search
      ? jobSearchQuery
      : query(colRef, sortBy, ...queryConstraints)
  );

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

export const get = async (
  params: { id?: string; slug?: string },
  col: string
) => {
  // @ts-ignore
  try {
    let queryConstraints = [];

    if (params?.id) {
      queryConstraints.push(where(documentId(), "==", params?.id));
    }

    if (params?.slug) {
      queryConstraints.push(where("slug", "==", params?.slug));
    }

    const colRef = collection(firestoreDb, col);
    const jobQuery = query(colRef, ...queryConstraints, limit(1));

    const snapshot: any = await getDocs(jobQuery);

    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
        created_at: doc?.data().created_at?.toDate(),
        updated_at: doc?.data().updated_at?.toDate(),
      };
    });
    return docs;
  } catch (error) {
    console.log(error);
  }
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
