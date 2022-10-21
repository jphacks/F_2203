import React from 'react'
import Card from '../Card'
import Loading from '../Loading'
import styles from './style.module.css'
import { Artists, type GetFavoriteArtistsByUidQuery } from '@/generated/graphql';
import { useQueryFavoriteArtists } from '@/hooks/useUser'

type IFavoriteArtists = {
  uid: string
  favoriteArtists: GetFavoriteArtistsByUidQuery["artists"]
}

const FavoriteArtists: React.FC<IFavoriteArtists> = ({ uid, favoriteArtists }) => {
  const artists = favoriteArtists

  return (
    <section>
      {/* <h1 className='text-2xl font-bold pt-0 pb-0 text-center dark:text-white'>
        お気に入りアーティスト🎤
      </h1> */}
      <div className='-mt-4'>
        <div
          className={`max-w-2xl mx-auto pt-5 flex flex-row overflow-x-scroll px-4 ${styles.mask}`}
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
