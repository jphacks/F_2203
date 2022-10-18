import { GetServerSideProps, NextPageWithLayout } from 'next'
import React, { useEffect, useState } from 'react'
import FavoriteArtists from '@/components/FavoriteArtists'
import { Layout } from '@/components/Layout'
import Loading from '@/components/Loading'
import Map from '@/components/Map/Map';
import NoContent from '@/components/NoContent'
import Spacer from '@/components/Space';
import { GetUserByCustomIdQuery } from '@/generated/graphql'
import { useAuthInitialized, useAuthUser } from '@/hooks/useAuth'
import { useQueryUserPosts } from '@/hooks/useUser'
import { createHasuraClient } from '@/lib/hasuraClient'

type Props = {
  user: GetUserByCustomIdQuery['users'][0]
}

const Profile: NextPageWithLayout<Props> = ({ user }) => {
  const [isMine, setIsMine] = useState<boolean>(false)
  const authUser = useAuthUser()
  const authInitialized = useAuthInitialized()
  const { data: postsData, isLoading } = useQueryUserPosts(user.uid)

  useEffect(() => {
    if (authUser?.uid === user.uid) {
      setIsMine(true)
    }
  }, [authUser?.uid, user.uid])

  if (!authInitialized) {
    return <Loading />
  }

  return (
    <div className='bg_main-color min-h-screen'>
      <div className='w-screen bg-white py-6'>
        <img
          src={user.avatar_url ? user.avatar_url : '/images/avatar.png'}
          className='mx-auto w-24 h-24'
        />
        <div className='text-center my-4'>
          <h2 className='text-xl font-medium'>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
      <div className='my-auto justify-center items-center flex max-w-2xl mx-auto'>
        { !postsData?.posts || postsData?.posts.length == 0 ? (
          <NoContent isMine={isMine} />
        ) : (
            <div className='min-w-full'>
              <h1 className='text-5xl font-bold pt-5 pb-0 text-center dark:text-white'>
                履歴書
              </h1>
              <FavoriteArtists uid={user.uid} />
              <Map posts={postsData?.posts}/>
          </div>
        )}
      </div>
      <Spacer size={40}/>
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

Profile.getLayout = (page) => <Layout>{page}</Layout>

export default Profile
