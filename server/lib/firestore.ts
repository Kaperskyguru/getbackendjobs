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
  startAfter,
  orderBy,
  documentId,
  or,
} from "firebase/firestore";
import { firestoreDb } from "./firebase";
import { months } from "~/helpers";

export const featuredJobs = async (col: string) => {
  // @ts-ignore
  try {
    const colRef = collection(firestoreDb, col);

    let sortBy = orderBy("created_at", "desc");
    let _limit = 20;

    const snapshot = await getDocs(
      query(
        colRef,
        sortBy,
        or(
          where("stick_for_1_week", "==", true),
          where("stick_for_1_month", "==", true),
          where("stick_for_24_hours", "==", true)
        ),
        limit(_limit)
      )
    );

    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
        created_at: doc.data()?.created_at?.toDate(),
        updated_at: doc.data()?.updated_at?.toDate(),
        timestamp: doc.data()?.created_at,
      };
    });

    return docs;
  } catch (error) {
    console.log(error);
  }
};

export const queryByCollection = async (
  col: string,
  filters: {
    search: String;
    locations: String;
    tags: String;
    benefits: String;
    sortBy: String;
    nanoseconds?: string;
    seconds?: string;
    date?: string;
    year?: string;
  },
  _limit: number = 20
) => {
  // @ts-ignore
  try {
    const colRef = collection(firestoreDb, col);

    const locations = filters?.locations
      ? [...filters?.locations?.split(";")]
      : [];

    const tags = filters?.tags ? [...filters?.tags?.split(";")] : [];

    const benefits = filters?.benefits
      ? [...filters?.benefits?.split(";")]
      : [];

    const queryConstraints = [];
    const limitConstraints = [];
    let sortBy = orderBy("created_at", "desc");
    // let _limit = 20;

    console.log(_limit);

    let jobSearchQuery: any = null;
    if (locations.length) {
      queryConstraints.push(
        where("locations", "array-contains-any", locations)
      );
    }

    if (tags.length) {
      queryConstraints.push(where("keywords", "array-contains-any", tags));
    }

    if (benefits.length) {
      queryConstraints.push(where("benefits", "array-contains-any", benefits));
    }

    if (filters?.date || filters?.year) {
      const date = new Date();
      const year = parseInt(filters?.year!) ?? date.getFullYear();

      // Start
      date.setFullYear(year);
      date.setDate(1);
      date.setMonth(months.indexOf(filters?.date!));
      const startDate = Timestamp.fromDate(date);
      queryConstraints.push(where("created_at", ">=", startDate));

      // End
      date.setDate(0);
      date.setDate(date.getDate());
      date.setMonth(months.indexOf(filters?.date!));
      const endDate = Timestamp.fromDate(date);

      queryConstraints.push(where("created_at", ">=", startDate));
      queryConstraints.push(where("created_at", "<=", endDate));
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

    if (_limit) {
      limitConstraints.push(limit(_limit));
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
        endAt(filters?.search + "\uf8ff"),
        ...limitConstraints
        // ...queryConstraints
      );
    }

    if (filters?.seconds && filters?.nanoseconds) {
      const timestamp = new Timestamp(filters?.seconds, filters?.nanoseconds);
      const q = query(
        colRef,
        orderBy("created_at", "desc"),
        ...limitConstraints,
        startAfter(timestamp)
      );

      const snapshot = await getDocs(q);

      const docs = Array.from(snapshot.docs).map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
          created_at: doc.data()?.created_at?.toDate(),
          updated_at: doc.data()?.updated_at?.toDate(),
          timestamp: doc.data()?.created_at,
        };
      });

      return docs;
    }

    const snapshot = await getDocs(
      filters?.search
        ? jobSearchQuery
        : query(colRef, sortBy, ...limitConstraints, ...queryConstraints)
    );

    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
        created_at: doc.data()?.created_at?.toDate(),
        updated_at: doc.data()?.updated_at?.toDate(),
        timestamp: doc.data()?.created_at,
      };
    });

    return docs;
  } catch (error) {
    console.log(error);
  }
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

export const getWebhooks = async () => {
  const colRef = collection(firestoreDb, "webhooks");

  const q = query(colRef, orderBy("created_at", "desc"));

  const snapshot = await getDocs(q);

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
      webhook: doc.data()?.webhook,
      created_at: doc.data()?.created_at?.toDate(),
      updated_at: doc.data()?.updated_at?.toDate(),
    };
  });

  return docs;
};

export const getWebhook = async (
  params: { channel?: string; team?: string },
  col: string
) => {
  // @ts-ignore
  try {
    let queryConstraints = [];

    if (params?.channel) {
      queryConstraints.push(where("channel", "==", params?.channel));
    }

    if (params?.team) {
      queryConstraints.push(where("team", "==", params?.team));
    }

    const colRef = collection(firestoreDb, col);
    const webhookQuery = query(colRef, ...queryConstraints, limit(1));

    const snapshot: any = await getDocs(webhookQuery);

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
  document.created_at = Timestamp.now();
  document.updated_at = Timestamp.now();
  const docRef = await addDoc(colRef, document);

  return docRef;
};

// export const addWebhook = async (col: string, document: Object) => {
//   // @ts-ignore
//   const colRef = collection(firestoreDb, col);
//   document.created_at = Timestamp.now();
//   document.updated_at = Timestamp.now();
//   const docRef = await addDoc(colRef, document);

//   return docRef;
// };

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

      if (!docs.length) {
        document.created_at = Timestamp.now();
        document.updated_at = Timestamp.now();

        const docRef = doc(collection(firestoreDb, col)); // Create a new document reference with a unique ID
        batch.set(docRef, document); // Add the data to the batch for this document reference
      }
    })
  );

  batch
    .commit()
    .then(() => {
      console.log("Batch write operation completed " + documents.length);
    })
    .catch((error) => {
      console.error("Batch write operation failed: ", error);
    });
};

export const del = async (col: any, id: any) => {
  const docRef = doc(firestoreDb, col, id);
  return await deleteDoc(docRef);
};
