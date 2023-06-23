import { useDispatch, useSelector } from "react-redux";
import { Div } from "../Home/StylesHome";
import { MdAccessTime } from 'react-icons/md';
import { DivContador, DivIngredientes, InfoPlato } from "./StylesPlatoDetails";
import Checkbox from '@mui/material/Checkbox';
import { HiMinusSm } from 'react-icons/hi';
import { BiPlus } from 'react-icons/bi';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cantidadPlato } from "../Redux/actions/restaunrantActions";
const DetailsPlato = () => {
    const plato = useSelector((store) => store.authReducer.platoSeleccionado);
    console.log(plato)
    const navigate = useNavigate();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const priceString = plato.price
    const priceNumber = Number(priceString.replace('$',''));
    const dispatch = useDispatch();
    const [cantidad, setCantidad] = useState(1);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);


    const handlePlus = () => {
        setCantidad(cantidad+1)
    }
    const handleMinus = () => {
        if(cantidad >0){
            setCantidad(cantidad-1)
        }
    }

    const handleNavigate = () => {
        dispatch(cantidadPlato(cantidad))
        navigate('/order')
    }

    const handleChecked1 = () => {
        setCheck1(!check1)
    }
    const handleChecked2 = () => {
        setCheck2(!check2)
    }
    const handleChecked3 = () => {
        setCheck3(!check3)
    }

    return (
        <Div style={{ marginTop: '10rem' }}>
            <InfoPlato>
                <figure>
                    <img src={plato.image} alt={plato.name} />
                </figure>
                <div className="title">
                    <div className="time" >
                        <p>{plato.name}</p>
                        <div className="reloj">
                            <MdAccessTime style={{fontSize:'1.5rem'}} />
                            <span>15-20 min</span>
                        </div>
                    </div>
                    <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                </div>

            </InfoPlato>
            <DivIngredientes style={{margin:'0 3rem'}}>
                <p className="ingredientesAdd">Additional Ingredients</p>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox checked={check1} onChange={handleChecked1} {...label} defaultChecked style={{ color: '#FFE031' }} />
                        <p>Tomatoes</p>
                    </div>
                    <p style={{marginRight:'1rem', color: check1 ? "#FFE031" : ''}}>+2$</p>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Checkbox checked={check2} onChange={handleChecked2} {...label} style={{ color: '#FFE031' }} />
                        <p>Grain</p>
                    </div>
                    <p style={{marginRight:'1rem', color: check2 ?  "#FFE031" : '' }}>+1$</p>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Checkbox checked={check3} onChange={handleChecked3} {...label} style={{ color: '#FFE031' }} />
                        <p>Lettuce leaf</p>
                    </div>
                    <p style={{marginRight:'1rem', color: check3?  "#FFE031" : ''  }}>+1$</p>
                </div>
            </DivIngredientes>
            <DivContador>
                <div className="buttons">
                    <button onClick={() => handleMinus()}><HiMinusSm/></button>
                    <span>{cantidad}</span>
                    <button onClick={() => handlePlus()}><BiPlus/></button>
                </div>
                <div onClick={() => handleNavigate()} className="price">
                    <span>Add</span>
                    <span>${check1 ? (cantidad* priceNumber)+2: cantidad* priceNumber 
                    && (check2 || check3) ? (cantidad*priceNumber)+1 : (cantidad* priceNumber)
                    
                    }</span>
                </div>
            </DivContador>
        </Div>
    )
}

export default DetailsPlato