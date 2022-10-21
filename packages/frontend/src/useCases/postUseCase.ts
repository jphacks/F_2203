import fetcher from '@/lib/fetcher'
import { createHasuraClient, HasuraClient } from '@/lib/hasuraClient'
import { GetArtistApiResponse } from '@/pages/api/artists/[ids]'

export default class postUseCase {
  hasuraClient: HasuraClient
  constructor() {
    this.hasuraClient = createHasuraClient(null)
  }
  /** 投稿 */
  async insertItem(
    uid: string,
    title: string,
    message: string,
    locationName: string,
    locationLat: number,
    locationLng: number,
    link: string,
    spotifyId: string,
    artistName: string,
    artistImage: string,
  ) {
    try {
      await this.hasuraClient.UpsertPostWithArtist({
        uid: uid,
        title: title,
        message: message,
        location_name: locationName,
        location_lat: locationLat,
        location_lng: locationLng,
        link: link,
        spotify_id: spotifyId,
        name: artistName,
        image_url: artistImage,
      })
    } catch (e) {
      throw e
    }
  }

  /** アーティスト情報取得 */
  async getArtistInfo(artistId: string) {
    try {
      const artistsData: GetArtistApiResponse = await fetcher(`/api/artists/${artistId}`)
      const artist = artistsData.artists[0]
      return artist
    } catch (e) {
      throw e
    }
  }
}
