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
                        <Checkbox {...label} defaultChecked style={{ color: '#FFE031' }} />
                        <p>Tomatoes</p>
                    </div>
                    <p style={{marginRight:'1rem'}}>+2$</p>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Checkbox {...label} style={{ color: '#FFE031' }} />
                        <p>Grain</p>
                    </div>
                    <p style={{marginRight:'1rem'}}>+1$</p>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Checkbox {...label} style={{ color: '#FFE031' }} />
                        <p>Lettuce leaf</p>
                    </div>
                    <p style={{marginRight:'1rem'}}>+1$</p>
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
                    <span>${cantidad* priceNumber}</span>
                </div>
            </DivContador>
        </Div>
    )
}

export default DetailsPlato