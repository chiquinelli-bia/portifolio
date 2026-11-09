import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { IBugReport } from "../../domain/entities/IBugReport";

export class FirestoreBugReporRepository {
  async save(BugData: IBugReport): Promise<void> {
    await addDoc(collection(db, "bug_reports"), {
      ...BugData,
      status: BugData.status || "open",
      createdAt: serverTimestamp(),
    });
  }
}
