import { useQuery } from '@tanstack/react-query'
import { createHasuraClient } from '@/lib/hasuraClient'

export const useQueryUser = (uid: string) => {
  const hasuraClient = createHasuraClient(null)
  return useQuery({
    queryKey: ['getUser', uid],
    queryFn: () => hasuraClient.getUserByUid({ uid: uid }),
  })
}

export const useQueryUserByCustomId = (customId: string) => {
  const hasuraClient = createHasuraClient(null)
  return useQuery({
    queryKey: ['getUser', customId],
    queryFn: () => hasuraClient.GetUserByCustomId({ customId: customId }),
  })
}

export const useQueryFavoriteArtists = (uid: string) => {
  const hasuraClient = createHasuraClient(null)
  return useQuery({
    queryKey: ['getFavoriteArtists', uid],
    queryFn: () => hasuraClient.GetFavoriteArtistsByUid({ uid: uid }),
  })
}

export const useQueryUserPosts = (uid: string) => {
  const hasuraClient = createHasuraClient(null)
  return useQuery({
    queryKey: ['getUserPosts', uid],
    queryFn: () => hasuraClient.GetUserPostsByUid({ uid: uid }),
  })
}
