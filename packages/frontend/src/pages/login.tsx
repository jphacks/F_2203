import { useRouter } from 'next/router'
import React, { FC, useEffect, useReducer } from 'react'
import styles from "../styles/Login.module.css"
import { useAuthUser } from '@/hooks/useAuth'
import authReducer from '@/reducers/authReducer'
import { authUseCase } from '@/useCases'

const Login: FC = () => {
  const router = useRouter();
  const [, dispatch] = useReducer(authReducer.reducer, authReducer.initialState);
  const user = useAuthUser();

  useEffect(() => {
    if (user != null && !user.isAnonymous) {
      router.push('/');
    }
  }, [user, router]);

  const logIn = async () => {
    try {
      await authUseCase.signIn(dispatch);
    } catch (err) {
      console.error(err);
    }
  };

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
