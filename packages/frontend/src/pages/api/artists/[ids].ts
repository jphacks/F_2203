import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next/types'
import { getArtistsByIds } from '@/lib/spotify'

export type GetArtistApiResponse = {
  artists: {
    external_urls: {
      spotify?: string
    }
    followers: {
      href?: null
      total: number
    }
    genres: string[]
    href: string
    id: string
    images: {
      height: number
      url: string
      width: number
    }[]
    name: string
    popularity: number
    type: string
    uri: string
  }[]
}

//artist idからArtist情報取得
const handler: NextApiHandler<GetArtistApiResponse> = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const response = await (await getArtistsByIds(req.query.ids)).json()

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json(response)
}

export default handler
