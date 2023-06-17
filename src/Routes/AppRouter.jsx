import { BrowserRouter, Route, Routes } from "react-router-dom"
import SplashScreen from "../Components/SplashScreen/SplashScreen"
import SingIn from "../Components/SingIn/SingIn"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashScreen/>}/>
            <Route path="/singin" element={<SingIn/>}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter