import { styled } from "styled-components";

export const StylesDivInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  p {
    margin: 0;
  }
  img {
    width: 18rem;
    height: 12rem;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 100% 10%, 70% 100%, 0% 100%);
    border-radius: 0.625rem;
    box-sizing: border-box;
  }
  .name {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #414141;
    margin-bottom: .3rem;
  }
  .time {
    font-style: normal;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #414141;
    margin-bottom: 0.3rem;
  }
  .price {
    font-style: normal;
    font-weight: 300;
    font-size: .8rem;
    line-height: 12px;
    letter-spacing: -0.3px;
    color: #a7a7a7;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 22rem;
  border-radius: 15px;

  .categories{
    display: flex;
    width: 100%;
    justify-content: space-around;
    span{
      background-color: #F2F2F2 ;
      padding: 1rem 3rem;
      border-radius: 5px;
    }
  }

  .pResta {
    font-size: 1.6rem;
    color: #414141;
    margin: 5% 5%;
  }
  
  
  .carouselAutoplay {
    div {
      height: 30vh;
      margin-right: 1%;
      border-radius: 10px;
    }
    img {
      width: 80%;
      border-radius: 10px;
    }
    .imgGirar {
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  }
  .carouselNoAutoplay {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    div {
      width: 25%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background-color: #f2f2f2;
      border-radius: 5px;
    }
    img {
      width: 20%;
    }
  }
`;
