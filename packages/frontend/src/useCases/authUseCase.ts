import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Dispatch } from 'react'
import toast from 'react-hot-toast'
import { auth } from '../lib/firebase'
import { Action } from '@/reducers/authReducer'

export default class AuthUseCase {
  /** サインイン */
  async signInWithGoogle(dispatch: Dispatch<Action>) {
    const provider = new GoogleAuthProvider()
    toast.loading('ログイン処理中...')
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.dismiss()
        const user = result.user
        dispatch({
          type: 'login',
          payload: {
            user,
          },
        })
      })
      .catch((error) => {
        toast.dismiss()
        const errorCode = error.code
        console.log(errorCode)
        throw error
      })
  }
  // ログイン状態の検知
  async isLoggedIn() {
    return auth.currentUser != null
  }

  /**ログアウト */
  async logout() {
    await auth.signOut()
  }
}
