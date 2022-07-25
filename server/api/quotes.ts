import { getFirestore, collection } from "firebase/firestore";

export default async (request, response) => {
    const db = getFirestore()
    
    const quotesRef = collection(db, "quotes")

}