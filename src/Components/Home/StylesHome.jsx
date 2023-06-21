import { styled } from "styled-components";

export const Div = styled.div`
    background-color: #fff;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const StylesDivInfo = styled.div`
   display: flex;
   width: 100%;
   justify-content: flex-start;
   align-items: center;
   cursor: pointer;
   img{
    width: 18rem;
    height: 12rem;
    clip-path: polygon(0 0, 100% 0, 100% 10%, 70% 100%, 0% 100%);
    border-radius: 0.625rem;
    box-sizing: border-box;
   }
`;