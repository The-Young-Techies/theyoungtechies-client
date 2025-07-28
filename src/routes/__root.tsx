import Footer from '@/components/Footer'
import InfoNav from '@/components/Info'
import Navbar from '@/components/Navbar'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    <InfoNav/>
      <Navbar/>
      <Outlet />
      {/* <Footer/> */}
      <TanStackRouterDevtools />
    </>
  ),
})
