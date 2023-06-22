import { Div } from "../Home/StylesHome"
import order from '../../assets/Svg (1).png'
import { NavLink, useNavigate } from "react-router-dom"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { DivOrder } from "./StylesOrderAcepted"
const AceptedOrder = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home')
    }
    return (
        <Div style={{ marginTop: '0rem' }}>
            <DivOrder>
                <div className="titleNewOrder">
                    <NavLink to={`/order`} style={{ textDecoration: 'none', color: 'black' }}>
                        <MdOutlineArrowBackIosNew />
                    </NavLink>
                    <p>Order is accepted</p>
                </div>
                <figure style={{
                    display: 'flex',
                    justifyContent: "center",

                }}>
                    <img style={{ width: '70%' }} src={order} alt="" />
                </figure>
                <button onClick={() => handleClick()}>Home</button>
            </DivOrder>
        </Div>
    )
}

export default AceptedOrder