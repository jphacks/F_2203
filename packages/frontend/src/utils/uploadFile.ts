import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import type { StorageReference } from 'firebase/storage'
import { storage } from '@/lib/firebase'

export const getProfileImagePath = (uid: string) => {
  return ref(storage, 'avatar/' + uid)
}

export const uploadFile = async (ref: StorageReference, file: Blob) => {
  const result = await uploadBytes(ref, file)
    .then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref)
      return url
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
  return result
}
