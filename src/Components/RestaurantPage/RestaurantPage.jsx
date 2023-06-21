
import { useSelector } from "react-redux";
import { Div, StylesDivInfo } from "../Home/StylesHome";
import { Rating } from "@mui/material";
import { DivPlatos } from "./StylesRestaurantPage";

const RestaurantPage = () => {

  const restaurante = useSelector((store) => store.authReducer.selectedRestaurantId);
  const { platos } = restaurante;
  console.log(restaurante.platos);
  return (
    <Div style={{ marginTop: '50rem' }}>
      <StylesDivInfo>
        <figure>
          <img src={restaurante.image} alt={restaurante.name} />
        </figure>
        <div>
          <p className="name">{restaurante.name}</p>
          <p style={{ marginTop: '1rem' }}>{restaurante.description}</p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',

          }}>
            <Rating style={{ fontSize: '1.2rem', color: '#FFE031', opacity: .5, marginTop: '.5rem' }} />
            <span style={{
              display: 'flex',
              background: '#F2F2F2',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '.5rem',
              borderRadius: '5px',
              margin: '0rem 1rem 2rem 0rem'

            }}>15-20 min</span>
          </div>
        </div>
      </StylesDivInfo>
      <div className="categories">
        <span>All</span>
        <span>Salates</span>
        <span>Pizza</span>
      </div>
      <DivPlatos>
        {
          platos?.map((plato, index) => (
            <div key={index}>
              <figure>
                <img src={plato.image} alt={plato.name} />
              </figure>
              <div className="price-name">
                <p className="name">{plato.name}</p>
                <p className="price">{plato.price}</p>
              </div>
            </div>
          ))
        }
      </DivPlatos>
    </Div>
  )
}

export default RestaurantPage