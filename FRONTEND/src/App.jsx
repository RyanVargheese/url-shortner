import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import { Outlet } from '@tanstack/react-router'

const RouteLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default RouteLayout