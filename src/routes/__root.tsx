import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
      <TanStackRouterDevtools />
    </>
  ),
})
