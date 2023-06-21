import { BrowserRouter, Route, Routes } from "react-router-dom"
import SplashScreen from "../Components/SplashScreen/SplashScreen"
import SingIn from "../Components/SingIn/SingIn"
import CreateAcount from "../Components/CreateAccount/CreateAcount"
import Home from "../Components/Home/Home"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashScreen/>}/>
            <Route path="/singin" element={<SingIn/>}/> 
            <Route path="/createacount" element={<CreateAcount/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter