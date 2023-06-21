import { styled } from "styled-components";

export const DivPlatos = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  img {
    width: 20rem;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
  }
  .price-name {
    margin-left: 3rem;
  }

  .name {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #414141;
  }
  .price {
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #a7a7a7;
  }
 
`;
