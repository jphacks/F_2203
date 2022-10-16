import { GetServerSideProps, NextPageWithLayout } from 'next'
import React from 'react'
import { Layout } from '@/components/Layout'
import Loading from '@/components/Loading'
import NoContent from '@/components/NoContent'
import { GetUserByCustomIdQuery } from '@/generated/graphql'
import { createHasuraClient } from '@/lib/hasuraClient'

type Props = {
  user: GetUserByCustomIdQuery['users'][0]
}

const Profile: NextPageWithLayout<Props> = ({ user }) => {
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
        <NoContent />
      </div>
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
