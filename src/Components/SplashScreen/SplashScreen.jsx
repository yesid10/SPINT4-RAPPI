import { CarImage, Screen } from "./StylesSplashScrenn"
import { Div } from "../Home/StylesHome";
import Logo from '../../assets/Logo.png'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
       navigate('/singin');
    }, 4200)
    return() => clearTimeout(timer);
  }, [navigate])

  return (
    <Div style={{marginTop:'0rem', height:'50vh'}}>
      <Screen>
        <CarImage src={Logo} alt="logo" />
      </Screen>
    </Div>
  )
}

export default SplashScreen