import { linkWithPopup } from "firebase/auth"
import { useRouter } from 'next/router'
import React, { FC, useEffect, useReducer } from 'react'
import styles from "../styles/Login.module.css"
import { useAuthUser } from '@/hooks/useAuth'
import { auth, googleProvider } from "@/lib/firebase"
import { createHasuraClient } from "@/lib/hasuraClient";
import authReducer from '@/reducers/authReducer'
import { authUseCase } from '@/useCases'

const Login: FC = () => {
  const router = useRouter()
  const [, dispatch] = useReducer(authReducer.reducer, authReducer.initialState)
  const user = useAuthUser()
  const hasuraClient = createHasuraClient(null)

  useEffect(() => {
    const data = async() => {
      if (user != null && !user.isAnonymous) {
        const uid = user?.uid
        const data = await hasuraClient.getUserByUid({ uid: uid })
        if (data.user != null) {//登録済みユーザーの場合
          return router.push(`/${data.user?.custom_id}`)
        } else {
          router.push("/sign_up")
        }
      }
    }
    data()
  }, [user, router])

  const logIn = async () => {
    try {
      await authUseCase.signInWithGoogle(dispatch)
      return router.push("/sign_up")
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <main className={`mx-auto my-auto min-h-screen justify-center flex items-center ${styles.container}`}>
      <div>
        <div className='justify-center flex mb-40'>
          <h1 className='text-7xl'>Welcome!</h1>
        </div>

        <div className='justify-center flex'>
          <button className={styles.bt_login} onClick={logIn}>
            <p className='font-medium'>Googleアカウントでログイン</p>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Login
