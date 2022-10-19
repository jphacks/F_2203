import { GetServerSideProps, NextPageWithLayout } from 'next'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import FavoriteArtists from '@/components/FavoriteArtists'
import { Layout } from '@/components/Layout'
import Loading from '@/components/Loading'
import Map from '@/components/Map/Map'
import NoContent from '@/components/NoContent'
import Spacer from '@/components/Space'
import Timeline from '@/components/Timeline'
import { GetUserByCustomIdQuery } from '@/generated/graphql'
import { useAuthUser } from '@/hooks/useAuth'
import { useQueryUserPosts } from '@/hooks/useUser'
import { createHasuraClient } from '@/lib/hasuraClient'

type Props = {
  user: GetUserByCustomIdQuery['users'][0]
}

const Resume: NextPageWithLayout<Props> = ({ user }) => {
  const [isMine, setIsMine] = useState<boolean>(false)
  const authUser = useAuthUser()
  const { data: postsData, isLoading } = useQueryUserPosts(user.uid)

  useEffect(() => {
    if (authUser?.uid === user.uid) {
      setIsMine(true)
    }
  }, [authUser?.uid, user.uid])

  return (
    <div className='bg_main-color min-h-screen'>
      <div className='my-auto justify-center items-center max-w-5xl mx-auto'>
        <h1 className='text-5xl font-bold pt-5 pb-10 text-center dark:text-white'>履歴書</h1>
        {!postsData?.posts || postsData?.posts.length == 0 ? (
          <NoContent isMine={isMine} />
        ) : (
          <div className='min-w-full'>
            <div className='flex-row grid grid-cols-3 gap-4'>
              <div className='card bg-base-100 shadow-xl'>
                <div className='card-body'>
                  <div className='flex'>
                    <div className='avatar'>
                      <div className='w-20  mask mask-squircle'>
                        <img
                          src={user.avatar_url ? user.avatar_url : '/images/avatar.png'}
                          alt='Avatar'
                        />
                      </div>
                    </div>
                    <Spacer size={10} />
                    <h2 className='card-title w-full mx-2 justify-center'>{user.name}</h2>
                  </div>
                  <p>{user.bio}aaaaa</p>
                </div>
              </div>
              <div className='card bg-base-100 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title'>投稿数</h2>
                  <p className='text-blue-500 text-6xl text-center'>{postsData.posts.length}</p>
                  <p className='text-center'>こ</p>
                </div>
              </div>
              <div className='card bg-base-100 shadow-xl'>
                <Confetti numberOfPieces={150} gravity={0.05} recycle={false} />
                <div className='card-body'>
                  <h2 className='card-title'>GPA</h2>
                  <p className='text-blue-500 text-6xl text-center'>{postsData.posts.length}</p>
                  <p className='text-center'>⭐️⭐️⭐️⭐️</p>
                </div>
              </div>
              <div className='card bg-base-100 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title'>アーティスト別 投稿数</h2>
                </div>
              </div>
              <div className='card col-span-2 bg-base-100 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title'>お気に入りアーティスト🎤</h2>
                  <FavoriteArtists uid={user.uid} />
                </div>
              </div>
            </div>
            <Spacer size={20} />
            <div className='card w-full bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h2 className='card-title'>履歴</h2>
                <Timeline posts={postsData.posts} />
              </div>
            </div>
            <Spacer size={20} />
            <div className='card w-full bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h2 className='card-title'>足あと 📍</h2>
                <Map posts={postsData?.posts} />
              </div>
            </div>
          </div>
        )}
      </div>
      <Spacer size={40} />
    </div>
  )
}

//SSR
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string
  const hasuraClient = createHasuraClient(null)
  const data = await hasuraClient.GetUserByCustomId({ customId: id })

  if (data.users.length == 0) {
    return {
      notFound: true,
    }
  }

  return { props: { user: data.users[0] } }
}

Resume.getLayout = (page) => <Layout>{page}</Layout>

export default Resume
