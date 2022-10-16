import { useQuery } from "@tanstack/react-query";
import { createHasuraClient } from "@/lib/hasuraClient";

export const useQueryUser = (uid: string) => {
  const hasuraClient = createHasuraClient(null)
  return useQuery({
    queryKey: ['getUser', uid],
    queryFn: () => hasuraClient.getUserByUid({uid: uid})
  })
}
