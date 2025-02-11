import { createFileRoute } from '@tanstack/react-router'
import Details from '../../pages/Details'
import { getById } from '../../queries/disneyQueries'


export const Route = createFileRoute('/characters/$id')({
  loader: async ({ context: { queryClient }, params }) => {
    return queryClient.ensureQueryData(getById(params.id))
  },
  component: Details,
})
