import { MarkerF, InfoWindowF } from '@react-google-maps/api'
import React, { useMemo, useState } from 'react'
import {type GetUserPostsByUidQuery } from '@/generated/graphql';

type Post = GetUserPostsByUidQuery["posts"][0]

interface IPlaceInfo {
  size?: google.maps.Size
  posts: Post[]
}

type SelectedPin = {
  lat: number
  lng: number
  title: string
  message: string
  artistName: string
}

const PlaceInfo: React.FC<IPlaceInfo> = ({ size, posts }) => {
  const [selected, setSelected] = useState<SelectedPin | null>()

  const Pin = (p: Post) => {
    //同じ場所の登録の場合にiconがかぶるのでランダムに少しずらしてあげる
    const lat = useMemo(() => Math.random() * 0.001 + p.location_lat, [p])
    const lng = useMemo(() => Math.random() * 0.001 + p.location_lng, [p])

    return (
      <MarkerF
            key={p.id}
            position={{
              lat: lat,
              lng: lng,
            }}
            onClick={() => {
              setSelected({lat: lat,lng: lng, title: p.title ?? '', message:p.message ?? '', artistName: p.artist?.name ?? ''})
              // <InfoWindow>が描画。
            }}
            onMouseOver={() => {
              setSelected({lat: lat,lng: lng, title: p.title ?? '', message:p.message ?? '', artistName: p.artist?.name ?? ''})
            }}
            onMouseOut={() => {
              setSelected(null)
            }}
            icon={{
              url: '/images/musical.png',
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(50, 50),
              // アイコン表示の設定。
            }}
      />
    )
  }
  return (
    <>
      {posts.map((p) => (
        Pin(p)
      ))}
      {selected && (
        <InfoWindowF
          // key={`${selected.location.position.lat * selected.location.position.lng} info`}
          position={{
            lat: selected.lat,
            lng: selected.lng,
          }}
          onCloseClick={() => {
            setSelected(null)
          }}
          options={{
            pixelOffset: size,
          }}
        >
          <div className='from-pink-500 via-red-500 to-yellow-500'>
            {/* <p className='text-sm text-rose-300 font-bold'>{selected.year}</p> */}
            <h1 className='text-base font-bold'>{selected.title}</h1>
            <p className='text-gray-500'>{selected.artistName}</p>
            <p className='mt-2'>{selected.message}</p>
          </div>
        </InfoWindowF>
      )}
    </>
  )
}

export default PlaceInfo
