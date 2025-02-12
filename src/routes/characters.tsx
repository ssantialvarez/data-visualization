import { createFileRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'

export const Route = createFileRoute('/characters')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Navbar />
      <div className="sm:pb-32 md:pb-16"></div>
      <Outlet/>
    </>
  )
}