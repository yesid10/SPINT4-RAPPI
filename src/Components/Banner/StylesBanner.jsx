import { styled } from "styled-components";

export const DivLayout = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5% 0 3%;


  .icono {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  .icons {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 3% 0%;
  }
  .bolita {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ffe031;
    margin-top: 4px;
  }
`;
