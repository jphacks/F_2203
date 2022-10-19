import { GoogleMap, LoadScriptNext } from '@react-google-maps/api'
import React, { useCallback, useRef, useState } from 'react'
import PlaceInfo from './PlaceInfo'
import { GetUserPostsByUidQuery } from '@/generated/graphql'
import { mapStyles } from '@/utils/mapStyles'
// 地図のデザインは https://snazzymaps.com からインポートできる。

const key = process.env.NEXT_PUBLIC_GOOGLEMMAP_API_KEY as string

const mapContainerStyle: React.CSSProperties = {
  height: '60vh',
  width: '100%',
  maxWidth: '56rem',
  alignItems: 'center',
  margin: 'auto',
}
// 地図の大きさを指定。

const options: google.maps.MapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  // デフォルトUIをキャンセル。
  zoomControl: true,
}

type IMap = {
  posts: GetUserPostsByUidQuery['posts']
}

const Map: React.FC<IMap> = ({ posts }) => {
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined)

  const center = {
    lat: posts[0].location_lat,
    lng: posts[0].location_lng,
  }

  const createOffsetSize = useCallback(() => {
    setSize(new window.google.maps.Size(0, -15))
  }, [])
  //API読み込み後に再レンダーを引き起こさないため、useStateを使わず、useRefとuseCallbackを使用。
  return (
    <div>
      {/* <h1 className='text-2xl font-bold pt-20 pb-5 text-center dark:text-white'>足あと📍</h1> */}
      <LoadScriptNext googleMapsApiKey={key} onLoad={createOffsetSize}>
        <GoogleMap
          id='map'
          mapContainerStyle={mapContainerStyle}
          zoom={8} // デフォルトズーム倍率を指定
          center={center}
          options={options}
        >
          <PlaceInfo size={size} posts={posts} />
        </GoogleMap>
      </LoadScriptNext>
    </div>
  )
}

export default React.memo(Map)
