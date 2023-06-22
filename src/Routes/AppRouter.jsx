import { BrowserRouter, Route, Routes } from "react-router-dom"
import SplashScreen from "../Components/SplashScreen/SplashScreen"
import SingIn from "../Components/SingIn/SingIn"
import CreateAcount from "../Components/CreateAccount/CreateAcount"
import Home from "../Components/Home/Home"
import RestaurantPage from "../Components/RestaurantPage/RestaurantPage"
import DetailsPlato from "../Components/DetailsPlato/DetailsPlato"
import Order from "../Components/OrderPage/Order"
import AceptedOrder from "../Components/OrderAcepted/AceptedOrder"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashScreen/>}/>
            <Route path="/singin" element={<SingIn/>}/> 
            <Route path="/createacount" element={<CreateAcount/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/restaurante/:id" element={<RestaurantPage/>}/>
            <Route path="/detalleplato/:name" element={<DetailsPlato/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/ordenaceptada" element={<AceptedOrder/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter