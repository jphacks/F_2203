import type { NextPageWithLayout } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Layout } from '@/components/Layout'
import Seo from '@/components/Seo';
import Spacer from '@/components/Space'
import { useAuthUser } from '@/hooks/useAuth'

const Home: NextPageWithLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const authUser = useAuthUser()
  useEffect(() => {
    if (authUser?.uid) {
      setIsLoggedIn(true)
    }
  }, [authUser])
  return (
    <div className={styles.container}>
      <Seo/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          オタク自ら聖地を作ってこう！
        </h1>

        <p className={styles.description}>
          オタクの履歴書は、誰でも直感的に使えるサービスです。<br />
          イベントやライブの思い出を記録して、シェアして、楽しみましょう。
        </p>

        <div className={styles.grid}>
          <Image
            width={800}
            height={600}
            objectFit='contain'
            style={{ width: "auto", maxHeight: "600px", maxWidth: "100%" }}
            src={"/images/eyecatch.png"}
            alt="オタクの履歴書"
          ></Image>
        </div>

        <Spacer size={24} />
        <div className='divider'>
          {isLoggedIn ?
            <div className='dropdown dropdown-end'>
              <Link href='/new'>
                <a className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm sm:w-auto px-5 py-2.5 text-center'>
                  + New
                </a>
              </Link>
            </div>
            :
            <div className='navbar-end mr-4'>
              <Link href='/login'>
                <a className='bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm sm:w-auto px-5 py-2.5 text-center text-white'>
                  ログイン
                </a>
              </Link>
            </div>
          }
        </div>

        <div className='text-center mt-8' style={{ width: "60%" }}>
          <h2 className='font-bold text-2xl'>
            Features
          </h2>
          <div className='flex mx-auto mt-8' >
            <div className="flex-1" >
              <Image
                width={40}
                height={30}
                objectFit='contain'
                style={{ width: "auto", maxHeight: "600px", maxWidth: "100%" }}
                src={"/images/map-location.svg"}
                alt="足あとを残す"
              />
              <p className='font-bold text-sm' >足あとを残す</p>
              <p className='font-extralight text-xs text-slate-500'>
                ライブやイベントの足あとを記録しましょう。
              </p>
            </div>
            <div className='flex-1'>
              <Image
                width={40}
                height={30}
                objectFit='contain'
                style={{ width: "auto", maxHeight: "600px", maxWidth: "100%" }}
                src={"/images/music.svg"}
                alt="アーティストを紐づけ"
              />
              <p className='font-bold text-sm'>アーティストを紐づけ</p>
              <p className='font-extralight text-xs text-slate-500'>足あとにアーティストを指定すれば、どんなアーティストのイベントに参加したのかが一目で分かります。同じアーティストが好きなユーザーを探すこともできます。</p>
            </div>
            <div className='flex-1'>
              <Image
                width={40}
                height={30}
                objectFit='contain'
                style={{ width: "auto", maxHeight: "600px", maxWidth: "100%" }}
                src={"/images/user.svg"}
                alt="自分だけのプロフィール"
              />
              <p className='font-bold text-sm'>自分だけのプロフィール</p>
              <p className='font-extralight text-xs text-slate-500' >ライブやイベントを記録すると、プロフィールに足あとが追加されます。足あとの記録が、あなたの魅力を伝えてくれるはずです。</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
