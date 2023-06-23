
import { useDispatch, useSelector } from "react-redux";
import { Div, StylesDivInfo } from "../Home/StylesHome";
import { Rating } from "@mui/material";
import { DivPlatos } from "./StylesRestaurantPage";
import { Link } from "react-router-dom";
import { navigateDetallePlato } from "../Redux/actions/restaunrantActions";

const RestaurantPage = () => {

  const restaurante = useSelector((store) => store.authReducer.selectedRestaurantId);
  const { platos } = restaurante;
  console.log(restaurante.platos);
  const dispatch = useDispatch();
  const handleClickPlato = (plato) => {
    dispatch(navigateDetallePlato(plato))
    console.log(plato);
  }
  return (
    <Div style={{ marginTop: '25rem'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ width: '15rem', }} src="https://img.freepik.com/vector-gratis/plantilla-logotipo-chef-detallada_23-2148987940.jpg?w=740&t=st=1687382466~exp=1687383066~hmac=b6d35a4651ed43a0896cb31e1c4643d83c7e7edbfafb44e17037f7fe3cfd539b" alt="" />
      </div>
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
            <Link onClick={() => handleClickPlato(plato)} to={`/detalleplato/${plato.name}`} key={index}>
              <div >
                <figure>
                  <img src={plato.image} alt={plato.name} />
                </figure>
                <div className="price-name">
                  <p className="name">{plato.name}</p>
                  <p className="price">{plato.price}</p>
                </div>
              </div>
            </Link>

          ))
        }
      </DivPlatos>
    </Div>
  )
}

export default RestaurantPage