import { useRouter } from 'next/router'
import React, { FC, useEffect, useReducer, useState } from 'react'
import toast from 'react-hot-toast'
import styles from '../styles/Login.module.css'
import Loading from '@/components/Loading'
import { useAuthUser } from '@/hooks/useAuth'
import { createHasuraClient } from '@/lib/hasuraClient'
import authReducer from '@/reducers/authReducer'
import { authUseCase } from '@/useCases'

const Login: FC = () => {
  const router = useRouter()
  const [, dispatch] = useReducer(authReducer.reducer, authReducer.initialState)
  const user = useAuthUser()
  const hasuraClient = createHasuraClient(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const data = async () => {
      setIsLoading(true)
      if (user != null && !user.isAnonymous) {
        const uid = user?.uid
        const data = await hasuraClient.getUserByUid({ uid: uid })
        if (data.user != null) {
          //登録済みユーザーの場合
          return router.push(`/profile/${data.user?.custom_id}`)
        } else {
          return router.push('/sign_up')
        }
      }
      setIsLoading(false)
    }
    data()
  }, [user, router])

  const logIn = async () => {
    try {
      setIsLoading(true)
      await authUseCase.signInWithGoogle(dispatch)
      return router.push('/sign_up')
    } catch (err) {
      setIsLoading(false)
      toast.error(`ログインに失敗しました😥 時間を空けてもう一度試してみてください`)
      console.log(err)
    }
  }

  if (isLoading) {
    return <Loading />
  }
  return (
    <main
      className={`mx-auto my-auto min-h-screen justify-center flex items-center ${styles.container}`}
    >
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
