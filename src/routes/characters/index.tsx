import { createFileRoute } from '@tanstack/react-router'
import CharactersHome from '../../pages/CharactersHome'

export const Route = createFileRoute('/characters/')({
  component: CharactersHome,
})
