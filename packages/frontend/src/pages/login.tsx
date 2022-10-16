import { linkWithPopup } from "firebase/auth"
import { useRouter } from 'next/router'
import React, { FC, useEffect, useReducer, useState } from 'react'
import styles from "../styles/Login.module.css"
import { useAuthUser } from '@/hooks/useAuth'
import { auth, googleProvider } from "@/lib/firebase"
import authReducer from '@/reducers/authReducer'
import { authUseCase } from '@/useCases'

const Login: FC = () => {
  const [isError, setIsError] = useState<boolean>(false)
  const router = useRouter()
  const [, dispatch] = useReducer(authReducer.reducer, authReducer.initialState)
  const user = useAuthUser()

  useEffect(() => {
    if (user != null && !user.isAnonymous) {
      router.push('/')
    }
  }, [user, router])

  const reLogIn = async () => {
    try {
      await authUseCase.signIn(dispatch)
    } catch (err) {
      console.error(err)
    }
  }

  const loginWithGoogle = () => {
    if (auth.currentUser) {
      linkWithPopup(auth.currentUser, googleProvider)
        .then((result) => {
          const user = result.user
          console.log(user)
          setIsError(false)
          router.push("/dashboard")
        })
        .catch(() => {
          setIsError(true)
        })
    }
  }

  useEffect(() => {
    isError && reLogIn()
  }, [isError])


  return (
    <main className={`mx-auto my-auto min-h-screen justify-center flex items-center ${styles.container}`}>
      <div>
        <div className='justify-center flex mb-40'>
          <h1 className='text-7xl'>Welcome!</h1>
        </div>

        <div className='justify-center flex'>
          <button className={styles.bt_login}>
            <p className='font-medium'>Googleアカウントでログイン</p>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Login
