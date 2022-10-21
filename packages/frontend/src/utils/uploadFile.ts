import { storage } from "@/lib/firebase"
import { ref, StorageReference, uploadBytes } from "firebase/storage"

export const getProfileImagePath = (uid: string) => {
    return ref(storage, "avatar/" + uid)
}

export const uploadFile = async (ref: StorageReference, file: Blob) => {
    const result = await uploadBytes(ref, file)
        .then((snapshot) => {
            console.log(snapshot)
            return snapshot.ref
        })
        .catch((error) => {
            console.error(error)
            return false
        })
    return result
}

