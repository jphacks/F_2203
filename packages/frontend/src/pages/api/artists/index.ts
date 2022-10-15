import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next/types'
import { getArtistsByKeyword } from '@/lib/spotify'

export type GetArtistsApiResponse = { label: string; value: string }

//投稿のinputサジェストで使う用
const handler: NextApiHandler<GetArtistsApiResponse> = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const response = await (await getArtistsByKeyword(req.query.keyword)).json()

  let artists: GetArtistsApiResponse[] = []
  artists = response?.artists?.items?.slice(0, 5).map((artist: any) => ({
    label: artist.name,
    value: artist.id,
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ artists: artists })
}

export default handler
