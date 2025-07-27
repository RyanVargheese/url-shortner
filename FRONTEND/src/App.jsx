import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar'

const RouteLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default RouteLayout