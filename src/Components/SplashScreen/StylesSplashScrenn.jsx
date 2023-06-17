import { styled } from "styled-components";
import Logo from '../../assets/Logo.png'
export const Screen = styled.div`
  background-color: #ffe031;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const CarImage = styled.div`
  /* Estilos de la imagen */
  width: 300px;
  height: 300px;
  background-image: url(${Logo});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;

  /* Animación */
  animation-name: moveCar;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes moveCar {
    0% {
      background-position: 0 0;
    }
    /* 50% {
      background-position: -200px 0;
    } */
    100% {
      background-position: 700px 0;
    }
  }
`;
