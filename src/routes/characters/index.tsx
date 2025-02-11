import { createFileRoute } from '@tanstack/react-router'
import CharactersHome from '../../pages/CharactersHome'
import { getCharacters } from '../../queries/disneyQueries'

export const Route = createFileRoute('/characters/')({
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureInfiniteQueryData(getCharacters)
  },
  component: CharactersHome,
})
