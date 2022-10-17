import React from 'react'
import Card from '../Card'
import Loading from '../Loading'
import styles from './style.module.css'
import { useQueryFavoriteArtists } from '@/hooks/useUser'

type IFavoriteArtists = {
  uid: string
}

const FavoriteArtists: React.FC<IFavoriteArtists> = ({ uid }) => {
  const { data, isLoading } = useQueryFavoriteArtists(uid)
  const artists = data?.artists

  if (isLoading) {
    return <Loading />
  }

  return (
    <section>
      <h1 className='text-4xl font-bold pt-20 pb-0 text-center dark:text-white'>
        Favorite Artists
      </h1>
      <div className='-mt-4'>
        <div
          className={`max-w-2xl mx-auto pt-10 flex flex-row overflow-x-scroll px-4 ${styles.mask}`}
        >
          {artists?.map((ats, idx) => (
            <Card
              key={ats.artist?.spotify_id}
              name={ats.artist?.name ?? ''}
              url={ats.artist?.image_url ?? ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(FavoriteArtists)
