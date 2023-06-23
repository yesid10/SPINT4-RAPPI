import { Outlet } from "react-router-dom"
import BannerMenu from "../Banner/BannerMenu"


const Layout = () => {
  return (
    <div>
        <Outlet/>
        <BannerMenu/>
        
    </div>
  )
}

export default Layout