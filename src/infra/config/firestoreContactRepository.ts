import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { IContact } from "../../domain/entities/IContact";

export class FirestoreContactRepository {
  async save(contactData: IContact): Promise<void> {
    await addDoc(collection(db, "mensagens"), {
      ...contactData,
      createdAt: serverTimestamp(),
    });
  }
}
