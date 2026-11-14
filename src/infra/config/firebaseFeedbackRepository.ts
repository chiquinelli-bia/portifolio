import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { IFeedback } from "../../domain/entities/IFeedback";

export class FirestoreFeedbackRepository {
  async save(feedbackData: IFeedback): Promise<void> {
    await addDoc(collection(db, "feedbacks"), {
      ...feedbackData,
      createdAt: serverTimestamp(),
    });
  }
}
