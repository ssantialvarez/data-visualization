import { createFileRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/NavBar'

export const Route = createFileRoute('/characters')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Navbar />
      <div className="pb-16"></div>
      <Outlet/>
    </>
  )
}