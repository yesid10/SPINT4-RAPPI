import { styled } from "styled-components";

export const DivPerfil = styled.div`
  margin: 0 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10% 0 5% 0;
    width: 100%;
    p {
      margin: 0 35% 0 35%;
    }
  }
  figure {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    img {
      width: 14rem;
      height: 14rem;
      border-radius: 10rem;
      object-fit: cover;
    }
  }
  .DivButtons {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.2rem;
    margin-top: .7rem;

    .button {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      background-color: #F2F2F2 ;
      padding: 3% 5%;
      border-radius: 10px;
      cursor: pointer;
    }

    .icon{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: .8rem;
    }
  }
`;
