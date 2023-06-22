import { styled } from "styled-components";

export const DivPayment = styled.div`
  margin: 1% 3%;

  .titleNewOrder{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 45%;
        margin: 10% 0 5% 0;
    }
  .mediosPago {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.7rem;
      background-color: #f2f2f2;
      padding: 1rem 2.5rem;
      border-radius: 10px;
    }
    img {
      width: 2rem;
    }
    
  }
  .containInfo{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

      .platoComprar {
        margin-top: 15%;
        display: flex;
        width: 68%;
        align-items: center;
        justify-content: space-between;
        img {
          width: 35%;
          height: 18ch;
          border-radius: 19px;
          object-fit: cover;
        }
        .contador{
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 1.5rem;
            padding: .7rem 1.5rem;
            border-radius: 10rem;
            background-color: #F2F2F2;
    
            button{
                display: flex;
                align-items: center;
                background-color: transparent;
                border: none;
            }
        }
      }
      .name{
        font-size: 1.3rem;
      }
      .price{
        margin-top: 15%;
        display: flex;
        align-items: center;
        font-size: 1.3rem ;
        color: #A7A7A7;
      }
      
  }
  .input{
        
        p{
            margin: 8% 0 1% 0;
            color: #414141;
            font-size: 1.7rem;
        }
        input{
           padding: 2.7%;
           width: 100%;
           border-radius: 10px;
           border: 1px solid #A7A7A7;
        }
      }
      .prices{
        display: flex;
        justify-content: space-between;
        p{
            font-size: 1.3rem;
        }
        span{
            font-size: 1.3rem;
        }

      }
      hr{
        margin-bottom: 2rem;
      }
      button{
        width: 100%;
        background-color: #FFE031 ;
        border: none;
        padding: 2%;
        border-radius: 10px;
        cursor: pointer;
        margin: 2% 0 8% 0;
        color: #414141;
        font-weight: 500;
        font-size: 1.6rem;
      }
`;
