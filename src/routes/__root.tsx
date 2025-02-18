import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
//import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRouteWithContext<{queryClient: QueryClient}>()({
  component: () => (
    <>      
      <div className="min-h-screen bg-[url(/disney-castle.jpg)] bg-fixed bg-no-repeat">
        <Outlet />
      </div>
      
    </>
  )
})

//<TanStackRouterDevtools />