import { useSelector } from "react-redux";
import { Div } from "../Home/StylesHome"
import { DivPayment } from "./StylesOrder";
import { HiMinusSm } from 'react-icons/hi';
import { BiPlus } from 'react-icons/bi';
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { NavLink, useNavigate } from "react-router-dom";

const Order = () => {
  const cantidad = useSelector((store) => store.authReducer.cantidad);
  console.log(cantidad);
  const plato = useSelector((store) => store.authReducer.platoSeleccionado);
  const priceString = plato.price
  const priceNumber = Number(priceString.replace('$', ''));
  const platoArray = [plato]
  const [cantidad2, setCantidad2] = useState(cantidad);
  const navigate = useNavigate();

  const handleMinus = () => {
    if (cantidad2 > 0) {
      setCantidad2(cantidad2 - 1)
    }
  }

  const handlePlus = () => {
    setCantidad2(cantidad2 + 1)
  }
  const handleClick =() => {
    navigate('/ordenaceptada')
  }


  return (
    <Div style={{ marginTop: '15rem' }}>
      <DivPayment>
        <div className="titleNewOrder">
          <NavLink to={`detalleplato/${plato.name}`} style={{textDecoration:'none', color:'black'}}>
            <MdOutlineArrowBackIosNew />
          </NavLink>
          <p>New order</p>
        </div>
        <p>Deliver to</p>
        <div>
          <p>Payment</p>
        </div>
        <div className="mediosPago">
          <span>Cash</span>
          <span>
            <img src="https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Master_Card-256.png" alt="" />
            <p>2344.... 4589</p>
          </span>
          <span>
            <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png?w=740&t=st=1687390070~exp=1687390670~hmac=6335f09196f5b5fbda843caf562612eaea3d039c5050e5e9fe555d04b2ac7ef9" alt="" />
            <p>exaple........</p>
          </span>
        </div>
        <div>
          {
            platoArray?.map((plato, index) => (
              <div className="containInfo" key={index}>
                <div className="platoComprar">
                  <img src={plato.image} alt={plato.name} />
                  <div className="contador">
                    <button onClick={() => handleMinus()}><HiMinusSm /></button>
                    <span style={{ fontSize: '1.4rem' }}>{cantidad2}</span>
                    <button onClick={() => handlePlus()}><BiPlus /></button>
                  </div>
                  <div className="name">
                    <p>{plato.name}</p>
                  </div>
                </div>
                <div className="price">
                  <span>{cantidad2 * priceNumber}</span>
                </div>
              </div>
            ))
          }
        </div>
        <div className="input">
          <p>Note</p>
          <input type="text" placeholder="Write something" />
        </div>
        <div style={{ marginTop: '20%' }}>
          <div className="prices">
            <p>Products</p>
            <span>{cantidad2 * priceNumber}$</span>
          </div>
          <div className="prices">
            <p>Delivery</p>
            <span>4.5$</span>
          </div>
          <hr />
          <div className="prices">
            <p>Total</p>
            <span style={{ fontSize: '2rem' }}>{(cantidad2 * priceNumber) + 4.5}$</span>
          </div>
        </div>
        <button onClick={() => handleClick()}>Order</button>
      </DivPayment>
    </Div>
  )
}

export default Order