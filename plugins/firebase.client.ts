import { getFirestore, collection } from "firebase/firestore";

export default defineNuxtPlugin(({ $firebaseApp }) => {
  const app: any = $firebaseApp;

  const db = getFirestore(app);
  const modelsRef = collection(db, "jobs");

  return {
    provide: {
      db,
      modelsRef,
    },
  };
});
