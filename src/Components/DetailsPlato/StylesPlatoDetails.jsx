import { styled } from "styled-components";

export const InfoPlato = styled.div`
  img {
    width: 100%;
    height: 60ch;
    border-radius: 10px;
    object-fit: cover;
  }

  .time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 3rem;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 2rem;
      line-height: 23px;
      letter-spacing: -0.3px;
      color: #414141;
    }
  }
  .reloj {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 1rem;
  }
  .lorem {
    margin: 0 3rem;
    width: 70%;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #414141;
    margin-bottom: 1.6rem;
  }
`;

export const DivIngredientes = styled.div`
  .ingredientesAdd {
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 16px;

    letter-spacing: -0.3px;
    color: #a7a7a7;
  }
`;
export const DivContador = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 3rem 1.5rem 3rem;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .buttons{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:#F2F2F2;
    border-radius: 10px;
    padding: 1.5rem 0;
    width: 40%;
    span{
        font-size: 1.5rem;
    }
    
  }
  .price{
    background-color: #FFE031 ;
    display: flex;
    width: 70%;
    margin-left: 3rem ;
    padding: 1.5rem 0;
    border-radius: 10px;
    justify-content: space-around;
    cursor: pointer;
    span{
        font-size: 1.5rem;
    }
  }
`;
