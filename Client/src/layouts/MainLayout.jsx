import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout